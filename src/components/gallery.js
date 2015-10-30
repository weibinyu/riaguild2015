var React = require("react"),
    _ = require("lodash"),
    Link = require("react-router").Link,
    members = require("../data/members"),
    icons = require("../data/icons.json"),
    usedicons = _.reduce(members,function(ret,data,id){
        return Object.assign(ret,{[data.icon]:1});
    },{});

var Gallery = React.createClass({
    render: function(){
        var iconboxes = icons.map(function(icon,n){
            return (
                <span key={n} className={usedicons[icon]?"icon chosen":"icon"}>
                    <img src={"http://units.wesnoth.org/1.10/pics/core$images$units$"+icon+".png"} alt={icon} title={icon} />
                </span>
            );
        });
        return (
            <div>
                <Link to="/">Back to list</Link>
                <div className="iconboxes">{iconboxes}</div>
            </div>
        );
    }
});

module.exports = Gallery;