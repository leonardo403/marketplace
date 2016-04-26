'use strict';

var OrderBox = React.createClass({
  render: function() {
    return (
      <div className="orderBox">        
        <OrderName/>
        <OrderImage/>
        <OrderDescription desc="SmartTv"/>
      </div>     
    );
  }
});

var OrderName = React.createClass({
  render: function() {
    return (
      <div className="orderName">
        <p>Samsung</p>
      </div>
    );
  }
});

var OrderImage = React.createClass({
  render: function() {
    return (
      <div className="orderImage">
        <img src="assets/images/tv.jpg"/>
      </div>
    );
  }
});

var OrderDescription = React.createClass({
  render: function() {
    return (
      <div className="orderDesc">
        {this.props.desc}
      </div>
    );
  }
});


ReactDOM.render(
  <OrderBox />,  	
  document.getElementById('order')
);