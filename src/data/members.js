/*
To join the guild, add yourself to this object using github id as key and requiring your json as value.
Check users/krawaller.json for an example on what your file should look like!
*/

var members = {
	krawaller: require("./users/krawaller.json"),
	dagashi: require("./users/dagashi.json"),
	OskarKlintrot: require("./users/OskarKlintrot.json"),
	MoombaDS: require("./users/MoombaDS.json"),
	uf222ba: require("./users/uf222ba.json"),
	afrxx09: require("./users/afrxx09.json"),
	drager: require("./users/drager.json"),
	SheriefBadran: require("./users/SheriefBadran"),
	Grenmyr: require("./users/DavidGrenmyr.json"),
	em222iv: require("./users/em222iv.json"),
	mw222rs: require("./users/mw222rs.json"),
	jn222na: require("./users/jn222na.json"),
	Pajn: require("./users/Pajn.json"),
	ek222mw: require("./users/ek222mw.json"),
	me222rs: require("./users/me222rs.json"),
	Angamanga: require("./users/Angamanga.json"),
	mn22nw: require("./users/mn22nw.json"),
	swoot1: require("./users/swoot1.json")
};

var _ = require("lodash");

// add id and received pull requests to each member
members = _.reduce(members,function(ret,data,id){
	_.each(data.pullrequests || [],function(pr,n){
		var target = (pr.url.match("^https:\/\/github\.com\/([^\/]*)\/") || [])[1];
		pr.by = id;
		if (ret[target]){
			ret[id].pullrequests[n].target = target;
			ret[target].received = (ret[target].received || []).concat(pr);
		} else {
			console.log(id,"Unknown PR target",target);
		}
	});
	ret[id].id = id;
	return ret;
},members);

// lift out action log
var actions = _.reduce(members,function(ret,data,id){
	_.each(data.blogposts,function(post){
		ret.push(Object.assign({type:"post",description:post.title,by:id},post));
	});
	_.each(data.pullrequests || [],function(pr){
		ret.push(Object.assign({type:"pr",by:id},pr));
	});
	return ret;
},[]);



module.exports = {
	members: members,
	actions: _.sortBy(actions,"when").reverse()
};