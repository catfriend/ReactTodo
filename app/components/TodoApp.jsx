var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Feed the cat'
        }, {
          id: 2,
          text: 'Clean the house'
        }, {
          id: 3,
          text: 'Get a job'
        }, {
          id: 4,
          text: 'Win the lotto'
        }
      ]
    };
  },
  render: function (){
    var {todos} = this.state; // pull state

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
