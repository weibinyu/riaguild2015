var React = require("react"),
	Icon = require("./icon"),
	members = require("../data/members").members,
	Link = require("react-router").Link;

var Badge = React.createClass({
	render() {
		var currentMember = members[this.props.id];
		return (
			<span className="badge">
				<Link to={"/member/"+currentMember.github}>
					<Icon icon={currentMember.icon} />
					<p className="badge-name">{currentMember.name.split(" ")[0]}</p>
				</Link>
			</span>
		);
	}
});

module.exports = Badge;
