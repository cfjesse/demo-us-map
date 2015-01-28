document.addEventListener('DOMContentLoaded', function(e){

var map = [
    {"name":"Alabama", "abr":"AL", "txt": {"x":438.036, "y":238.324}, },
    {"name":"Alaska", "abr":"AK", "txt": {"x":48.614, "y":162.502}, },
    {"name":"Arizona", "abr":"AZ", "txt": {"x":218.385, "y":213.684}, },
    {"name":"Arkansas", "abr":"AR", "txt": {"x":383.813, "y":217.098}, },
    {"name":"California", "abr":"CA", "txt": {"x":157.229, "y":176.523}, },
    {"name":"Colorado", "abr":"CO", "txt": {"x":276.542, "y":172.219}, },
    {"name":"Connecticut", "abr":"CT", "txt": {"x":611.941, "y":146.663}, "box":{"x":604.145, "y":146.378, "n":6} },
    {"name":"Delaware", "abr":"DE", "txt": {"x":626.523, "y":177.301}, "box": {"x":619.979, "y":176.584, "n":7} },
    {"name":"Florida", "abr":"FL", "txt": {"x":494, "y":290.199} },
    {"name":"Georgia", "abr":"GA", "txt":{"x":468.44, "y":239.283} },
    {"name":"Hawaii", "abr":"HI", "txt":{"x":64.725, "y":265.901}, "box":{"x":55.145, "y":266.083, "n":10} },
    {"name":"Idaho", "abr":"ID", "txt":{"x":214.083, "y":112.029} },
    {"name":"Illinois", "abr":"IL", "txt":{"x":410.433, "y":161.854} },
    {"name":"Indiana", "abr":"IN", "txt":{"x":433.569, "y":161.54} },
    {"name":"Iowa", "abr":"IA", "txt":{"x":375.985, "y":144.134} },
    {"name":"Kansas", "abr":"KS", "txt":{"x":330.964, "y":180.57} },
    {"name":"Kentucky", "abr":"KY", "txt":{"x":445.926, "y":183.871} },
    {"name":"Louisiana", "abr":"LA", "txt":{"x":383.56, "y":252.824} },
    {"name":"Maine", "abr":"ME", "txt":{"x":549.65, "y":79.555} },
    {"name":"Maryland", "abr":"MD", "txt":{"x":616.195, "y":204.806}, "box":{"x":611.063, "y":204.418, "n":19} },
    {"name":"Massachusetts", "abr":"MA", "txt":{"x":481.906, "y":91.244}, "box":{"x":477.062, "y":90.667, "n":20} },
    {"name":"Michigan", "abr":"MI", "txt":{"x":443.251, "y":126.597} },
    {"name":"Minnesota", "abr":"MN", "txt":{"x":363.0, "y":104.6}},
    {"name":"Mississippi", "abr":"MS", "txt":{"x":407.9, "y":239.4} },
    {"name":"Missouri", "abr":"MO", "txt":{"x":381.5, "y":185.3} },
    {"name":"Montana", "abr":"MT", "txt":{"x":255.3, "y":80.4} },
    {"name":"Nebraska", "abr":"NE", "txt":{"x":324.9, "y":145.7} },
    {"name":"Nevada", "abr":"NV", "txt":{"x":188.2, "y":155.3}},
    {"name":"New Hampshire", "abr":"NH", "txt":{"x":512.0, "y":47.5}, "box":{"x":506.264, "y":47.083, "n":28} },
    {"name":"New Jersey", "abr":"NJ", "txt":{"x":564.1, "y":152}, "box":{"x":555.979, "y":152.125, "n":29} },
    {"name":"New Mexico", "abr":"NM", "txt":{"x":260.8, "y":220.2} },
    {"name":"New York", "abr":"NY", "txt":{"x":514.7, "y":114.3} },
    {"name":"North Carolina", "abr":"NC", "txt":{"x":500.3, "y":198.3} },
    {"name":"North Dakota", "abr":"ND", "txt":{"x":322.2, "y":83.7} },
    {"name":"Ohio", "abr":"OH", "txt":{"x":457.1, "y":155.9} },
    {"name":"Oklahoma", "abr":"OK", "txt":{"x":341.6, "y":210.9} },
    {"name":"Oregon", "abr":"OR", "txt":{"x":165.7, "y":97.1} },
    {"name":"Pennsylvania", "abr":"PA", "txt":{"x":497.6, "y":140.8} },
    {"name":"Rhode Island", "abr":"RI", "txt":{"x":578.3, "y":125.0}, "box":{"x":568.062, "y":124.75, "n":38} },
    {"name":"South Carolina", "abr":"SC", "txt":{"x":486.5, "y":217.2} },
    {"name":"South Dakota", "abr":"SD", "txt":{"x":322.0, "y":115.4} },
    {"name":"Tennessee", "abr":"TN", "txt":{"x":435.0, "y":203.0} },
    {"name":"Texas", "abr":"TX", "txt":{"x":329.2, "y":254.4} },
    {"name":"Utah", "abr":"UT", "txt":{"x":227.7, "y":161.5} },
    {"name":"Vermont", "abr":"VT", "txt":{"x":462.658, "y":55.81}, "box":{"x":456.312, "y":54.792, "n":44} },
    {"name":"Virginia", "abr":"VA", "txt":{"x":500.6, "y":175.2} },
    {"name":"Washington", "abr":"WA", "txt":{"x":177.3, "y":63.8} },
    {"name":"West Virginia", "abr":"WV", "txt":{"x":549.4, "y":222.5}, "box":{"x":542.312, "y":223.584, "n":47} },
    {"name":"Wisconsin", "abr":"WI", "txt":{"x":400.2, "y":111.0} },
    {"name":"Wyoming", "abr":"WY", "txt":{"x":264.0, "y":126.8} },
    {"name":"Mexico", "abr":"BJ", "txt":{}, "type":"country" } 
];

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
}, false);