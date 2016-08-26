var COMMENTBOX = React.createClass({
	render:function(){
		var data = this.props.data;

		var rows = data.map(function(datum) {
		  var clickHandler = function(ev){
			  console.log("Still in reactJs");
			  console.log(ev);
		  }

		  return (
			React.DOM.ul( {onClick:clickHandler},
			  React.DOM.li(null, datum['0']),
			  React.DOM.li(null, datum['1']),
			  React.DOM.li(null, datum['2']),
			  React.DOM.li(null, datum['3']),
			  React.DOM.li(null, datum['4'])
			)
		  );
		});

		return(
			React.DOM.div('', rows)
		);
	}
}); 