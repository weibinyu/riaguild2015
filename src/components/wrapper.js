/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

var React = require('react'),
	Link = require("react-router").Link;

var Wrapper = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                <h2>RIA course member guild 2015</h2>
                <ul className="nav">
                	<li><Link activeClassName="active" to="/">Home</Link></li>
                	<li><Link activeClassName="active" to="/members/">Roster</Link></li>
                	<li><Link activeClassName="active" to="/actions/">Deeds</Link></li>
                	<li><Link activeClassName="active" to="/gallery/">Gallery</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Wrapper;