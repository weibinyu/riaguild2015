var React = require("react");

var Icon = React.createClass({
	render: function(){

		var URL = this.props.icon.split("$")[0] === "ninjas" ? 
		"http://units.wesnoth.org/1.10/pics/add-ons$Internet_Meme_Era$images$" : 
		"http://units.wesnoth.org/1.10/pics/core$images$units$";

		return (
			<span>
				<img src={URL+this.props.icon+".png"} alt={this.props.icon} title={this.props.icon} />
			</span>
			);
	}
});

module.exports = Icon;