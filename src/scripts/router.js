export class Router {
    routes = {};

    add(routeName, url){
        this.routes[routeName] = url;
        //console.log(this.routes[routeName]);
    }

    route(event){
        event = event || window.event;
        event.preventDefault();
        const url = event.target.href;
        window.history.pushState({}, "", url);
        this.handle();
    }
    
    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html;
        })
    }
    
    
}