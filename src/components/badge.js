var React = require("react"),
	Icon = require("./icon"),
	members = require("../data/members").members,
	Link = require("react-router").Link;

var Badge = React.createClass({
	render() {
		var currentMember = members[this.props.id],
			names = currentMember.name.split(" "),
			surnameletters = {
				David: 1,
				Jesper: 2,
				Mattias: 1,
				Emil: 1
			}[names[0]];
		return (
			<span className="member-badge">
				<Link to={"/member/"+currentMember.github}>
					<Icon icon={currentMember.icon} />
					<p className="member-badge-name">{names[0]+(surnameletters ? " "+names[1].substr(0,surnameletters) : "")}</p>
				</Link>
			</span>
		);
	}
});

module.exports = Badge;
