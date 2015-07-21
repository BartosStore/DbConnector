(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/work1/dlcwork8/web/miba/tt_call/src/js/App.js":[function(require,module,exports){
var Child = require('./Child');



React.render(React.createElement(Calc, null), document.getElementById('app'));

},{"./Child":"/work1/dlcwork8/web/miba/tt_call/src/js/Child.js"}],"/work1/dlcwork8/web/miba/tt_call/src/js/Child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
  render: function renderChild(){
    return (
      React.createElement("div", null, 
        "Komponenta Child s predanym parametrem: ", React.createElement("b", null, this.props.name), "!"
      )
    )
  }
});

module.exports = Child;

},{}]},{},["/work1/dlcwork8/web/miba/tt_call/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvd29yazEvZGxjd29yazgvd2ViL21pYmEvdHRfY2FsbC9zcmMvanMvQXBwLmpzIiwiL3dvcmsxL2RsY3dvcms4L3dlYi9taWJhL3R0X2NhbGwvc3JjL2pzL0NoaWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CO0FBQ0E7O0FBRUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxJQUFJLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7QUNKdEQsSUFBSSwyQkFBMkIscUJBQUE7RUFDN0IsTUFBTSxFQUFFLFNBQVMsV0FBVyxFQUFFO0lBQzVCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtBQUFBLFFBQUEsMENBQUEsRUFDcUMsb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQVMsQ0FBQSxFQUFBLEdBQUE7QUFBQSxNQUM1RCxDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQ2hpbGQgPSByZXF1aXJlKCcuL0NoaWxkJyk7XHJcblxyXG5cclxuXHJcblJlYWN0LnJlbmRlcig8Q2FsYyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJ2YXIgQ2hpbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXJDaGlsZCgpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBLb21wb25lbnRhIENoaWxkIHMgcHJlZGFueW0gcGFyYW1ldHJlbTogPGI+e3RoaXMucHJvcHMubmFtZX08L2I+IVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZDsiXX0=
