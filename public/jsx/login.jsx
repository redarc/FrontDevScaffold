var React = require("react");
var _ = require("underscore");

var RTable = React.createClass({
  render: function(){

    var a = [1,2,8,9];
    var c = _.map(a, function(item){
      return item*3;
    });
    return (
      <div>
         <table>
          <thead>
            <tr>a</tr>
            <tr>a</tr>
            <tr>a</tr>
          </thead>
          <tbody>
            <tr>a</tr>
            <tr>a</tr>
            <tr>a</tr>
          </tbody>
         </table>
      </div>
      )
  }
})

React.render(
    <RTable />,
    document.getElementById('content')
);
