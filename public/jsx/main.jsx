var React = require("react");
var _ = require("underscore");

var RTitle = React.createClass({
  render: function(){

    var a = [1,2,8,9];
    var c = _.map(a, function(item){
      return item*3;
    });
    return (
      <div>
        <button>aaa</button>
        <p>Hi I'm www  button.  CCC   Test {c} {require("./content.js")}</p>
      </div>
      );
  }
})

React.render(
    <RTitle />,
    document.getElementById('content')
);
