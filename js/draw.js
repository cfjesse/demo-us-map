var id = "canvas-map-draw", url = 'http://www.americasbestvalueinn.com/reservations.cfm?submitted=1&State=',
urlCountry = 'http://www.americasbestvalueinn.com/reservations.cfm?submitted=1&Country=',
fColor = "#9BBFDD", s = new createjs.Graphics(), w = "white"; defText = "We've Got You Covered", 
f = false, t = true, containers = [], stateShapes = [];

var qs = function(sel){ return document.querySelector(sel); };

var imTest = qs('#'+id).getAttribute('data-image');
var imgDir = (imTest)?imTest:"images/";
console.log(imgDir);

var stage = new createjs.Stage(id);
var shading = "url("+imgDir+"mapShading.gif)";
var ua = navigator.userAgent;

stage.enableMouseOver();
createjs.Touch.enable(stage);

var checker = {
  iphone: (ua.match(/(iPhone|iPod|iPad)/))? true:false,
  android: (ua.match(/Android/))? true:false
};

var ev = (checker.iphone || checker.android)? "touchstart":"click";



// add listener shortcut
function listener (el, event, fn, bubble){
	var b = (bubble)?true:false;
	el.addEventListener(event, fn, b);
}

//set cursor for entire body to emulate roll over
function setCursor(arg){

    qs('body').style.cursor = arg;

}

// set blue label to selected state
function setLabel(state){

    qs('.status-current-state').innerHTML = state;

}

setLabel(defText);

var bg = new Image();

bg.src = imgDir+"mapShading.gif";

listener(bg, "load", function(){

	qs("#"+id).style.backgroundImage = shading;

});


//load Canada bitmap and setup rollover
var canImage = new Image();
canImage.src = imgDir+'canadaTrans.png';

listener(canImage, 'load', function(){

    var canadaContainer = new createjs.Container();
    var can = new createjs.Bitmap(imgDir+'canadaTrans.png');
    canadaContainer.addChild(can);
    stage.addChild(canadaContainer);
    can.x = 588;
    can.y = 8;
    can.name = "Canada";
    stage.update();

    listener(canadaContainer, 'mouseover', function(){
       
        setLabel('Canada');
        setCursor('pointer');
        // console.log(canadaContainer);
       
        canadaContainer.alpha = 0.01;   

    });
    
    listener(canadaContainer, 'mouseout', function(){
       
        setLabel(defText);
        setCursor('default');

        canadaContainer.alpha = 1;

    });

    listener(canadaContainer, "click", function(){
       
        setLabel(defText);
        setCursor('default');

        canadaContainer.alpha = 1;

        if(ev == 'touchstart'){

            var conf = confirm("Find hotels in Canada?");

            if(conf){

                window.open('http://www.canadasbestvalueinn.com/reservations.cfm');

            }

        } else {

            window.open('http://www.canadasbestvalueinn.com/reservations.cfm');

        }
        

    });

    var color = 'black';
    var text = new createjs.Text("Canada", "Arial 10pt", color);
    text.x = 585.661;
    text.y = 32.195;
    stage.addChild(text);
    stage.update(); 
    console.log(stage);

    function addShape(arg, ob){
        //arg is an instance of s (variable);
        var shape = new createjs.Shape(arg);
        shape.name = ob.name;
        shape.abr = ob.abr;
        var container = new createjs.Container();
        container.addChild(shape);
        container.name = ob.name;
        container.abr = ob.abr;

        //create shape object 
        stateShapes.push(shape);
        containers.push(shape);

        stage.addChild(container);

        listener(container, 'click', function(e){ 
            
            // console.log(this.name, " ", this.abr); 
            shape.alpha  = 1;
            setLabel(defText);
            var link = (!ob.type)?url:urlCountry;
            console.log(link+container.abr);

            if(ev == 'touchstart'){

                var conf = confirm("Find hotels in " + container.name + "?");

                if(conf){

                    window.open(link + container.abr);

                }

            } else {

                window.open(link + container.abr);

            }

        });

        listener(container, 'mouseover', function(){

            shape.alpha  = 0.01;
            setLabel(container.name);
            setCursor('pointer');

        });  

        listener(container, 'mouseout', function(){

            shape.alpha  = 1;
            setLabel(defText);
            setCursor('default');

        });

        s = new createjs.Graphics();

        if(!ob.box){

            var color = w;
            var text = new createjs.Text(ob.abr, "Arial 10pt", color);
            text.x = ob.txt.x;
            text.y = ob.txt.y;
            stage.addChild(text);
            stage.update(); 

        } 

    }

});