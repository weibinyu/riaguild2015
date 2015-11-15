var React = require("react"),
    _ = require("lodash"),
    members = require("../data/members").members,
    icons = require("../data/icons.json"),
    Icon = require("./icon"),
    Badge = require("./badge"),
    Navigation = require('react-router').Navigation,
    usedicons = _.reduce(members,function(ret,data,id){
        return Object.assign(ret,{[data.icon]:data.id});
    },{});

var Gallery = React.createClass({
    
    mixins: [Navigation],
    
    getInitialState:function(){
        return {
            FILTER_AVAILABLE: 'available',
            FILTER_TAKEN: 'taken',
            FILTER_ALL: 'all'
        };
    },
 
    getIconBoxesHTML: function(iconFilterFunction){
        
        return icons.filter(iconFilterFunction).map(function(icon,n){

            return (
                <span key={n} className={usedicons[icon]?"icon chosen":"icon"}>
                    {
                        usedicons[icon] ?
                        <Badge id={usedicons[icon]} /> :
                        <Icon icon={icon} />
                    }
                </span>
            ); 
        });
    },
    
    redirectToFilter: function(filter){
        this.props.history.pushState(null, '/gallery/' + filter);
    },
    
    render: function(){
        var self = this;
        
        var iconFilterFunction =  function(filterOn){
            switch(filterOn){
                case self.state.FILTER_TAKEN:
                    return (icon) => { return usedicons.hasOwnProperty(icon);};
                    break;
                case self.state.FILTER_AVAILABLE:
                    return (icon) => { return usedicons.hasOwnProperty(icon) === false;};
                    break;
                default:
                    return () => true;
                    break;
            }
            
        }(this.props.params.filter);
        
        return (
            <div>
                <p>These are the icons you can choose from, apart from the red ones as they are already taken!</p>
                <form>
                    <label>
                        Show all
                        <input type="radio" name="icon-filter" defaultChecked checked={this.props.params.filter === this.state.FILTER_ALL} onChange={this.redirectToFilter.bind(this, this.state.FILTER_ALL)}/>
                    </label>
                    <label>
                        Show taken
                        <input type="radio" name="icon-filter" checked={this.props.params.filter === this.state.FILTER_TAKEN} onChange={this.redirectToFilter.bind(this, this.state.FILTER_TAKEN)}/>
                    </label>
                    <label>
                        Show available
                        <input type="radio" name="icon-filter" checked={this.props.params.filter === this.state.FILTER_AVAILABLE}  onChange={this.redirectToFilter.bind(this, this.state.FILTER_AVAILABLE)}/>
                    </label>
                </form>
                <div className="iconboxes">{this.getIconBoxesHTML(iconFilterFunction)}</div>
            </div>
        );
    }
});

module.exports = Gallery;