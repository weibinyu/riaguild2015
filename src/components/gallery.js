var React = require("react"),
    _ = require("lodash"),
    Link = require("react-router").Link,
    members = require("../data/members").members,
    icons = require("../data/icons.json"),
    Icon = require("./icon"),
    Badge = require("./badge"),
    usedicons = _.reduce(members,function(ret,data,id){
        return Object.assign(ret,{[data.icon]:data.id});
    },{});

var Gallery = React.createClass({
    render: function(){
        var iconboxes = icons.map(function(icon,n){
            
            return (
                <span key={n} className={usedicons[icon]?"icon chosen":"icon"}>                    
                    { 
                        usedicons[icon] ?
                        <Link to={"/member/"+usedicons[icon]}>
                            <Badge icon ={icon} username={members[usedicons[icon]].name} />
                        </Link> :
                        <Icon icon={icon} linksTo={usedicons[icon]? usedicons[icon]: null} />
                    }                 
                </span>
            );
        });
        return (
            <div>
                <p>These are the icons you can choose from, apart from the red ones as they are already taken!</p>
                <div className="iconboxes">{iconboxes}</div>
            </div>
        );
    }
});

module.exports = Gallery;