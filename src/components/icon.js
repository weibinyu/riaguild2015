var React = require("react"),
	members = require("../data/members").members,
	Link = require("react-router").Link;

var Icon = React.createClass({
	render: function(){

		var URL = null;

		if (this.props.icon.split("$")[0] === "ninjas") { 
			URL = "http://units.wesnoth.org/1.10/pics/add-ons$Internet_Meme_Era$images$";
		} else if (this.props.icon.split("$")[0] === "demons") {
			URL = "http://units.wesnoth.org/1.10/pics/add-ons$After_the_Storm$images$units$";
		} else {
			URL = "http://units.wesnoth.org/1.10/pics/core$images$units$";
		}

		return (
			<span className="icon-span">
				<img src={URL+this.props.icon+".png"} alt={this.props.icon} title={this.props.icon} />
				{ this.props.linksTo ?
					<Link to={"/member/"+this.props.linksTo} className="claimed">
						{members[this.props.linksTo].name.split(" ")[0]}						
					</Link> :
					""					
				}
			</span>
			);
	}
});

module.exports = Icon;