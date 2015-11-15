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
            filters: [
                {
                    filterName: 'all',
                    labelText: 'Show all',
                    filterFunction: () => true,
                },
                {
                    filterName: 'available',
                    labelText: 'Show available',
                    filterFunction: (icon) => { return usedicons.hasOwnProperty(icon) === false;}
                },
                {
                    filterName: 'taken',
                    labelText: 'Show taken',
                    filterFunction: (icon) => { return usedicons.hasOwnProperty(icon);}
                }
            ]
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
        
        var getFilterFunction = function(){
            var filter = self.state.filters.filter(function(filter){
                return self.props.params.filter === filter.filterName;
            }).pop();
            
            return filter ? filter.filterFunction : (() => true);
        };
        
        var radioButtons = this.state.filters.map(function(filter, i){
            return (<label key={i}>
                        {filter.labelText}
                        <input type="radio" name="icon-filter" checked={self.props.params.filter === filter.filterName} onChange={self.redirectToFilter.bind(self, filter.filterName)}/>
                    </label>);
        });
        
        return (
            <div>
                <p>These are the icons you can choose from, apart from the red ones as they are already taken!</p>
                <form>
                    {radioButtons}
                </form>
                <div className="iconboxes">{this.getIconBoxesHTML(getFilterFunction())}</div>
            </div>
        );
    }
});

module.exports = Gallery;