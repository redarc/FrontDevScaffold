var React = require("react");
var _ = require("underscore");

var RTitle = React.createClass({
  render: function(){

    var a = [1,2,8,9];
    var c = _.map(a, function(item){
      return item*3;
    });
    return (
        <p>Hi I'm www button. {c} {require("./content.js")}</p>
      );
  }
})

React.render(
    <RTitle />,
    document.getElementById('content')
);
