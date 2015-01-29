
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>New Easel JS</title>
    <script src="lib/easeljs-0.8.0.min.js"></script>
	<script type="text/javascript" src="js/drawmap.min.js"></script>
	<style>
		div, canvas, ul, li, ol, span { margin:0; padding:0;  }
		.canvas-container-div { border:1px solid grey; width:740px; height:340px; position:relative; }
            .status-current-state { position:absolute; right:0; bottom:0; background-color:#005cab; color:white; width:320px; padding-left:10px; height:20px; line-height:20px; }
            #canvas-map-draw { background-position: .25px .5px; }
			.canvas-container-div { background-position:center; background-repeat:no-repeat; background-image:url(data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAFACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==); }
	</style>
</head>
<body>
	<div class="canvas-container-div">
        <div class="status-current-state">

        </div>
	    <canvas id="canvas-map-draw" width="740" height="340" data-image="images/">
        </canvas>
	</div>
</body>
</html>
