var React = require('react')
var ReactDOM = require('react-dom')

const Hello = React.createClass({
  render: function(){
    return (
      <div> Hello ReactJS Program!</div>
    )
  }
})

ReactDOM.render(<Hello/>,document.getElementById('app'))
