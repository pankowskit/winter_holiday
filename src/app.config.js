import About from "./views/about";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Gallery from "./views/gallery";
import Home from "./views/home";
import Menu from "./views/menu";
import Privacy from "./views/privacy";

const ERRORS = {
    "401":{
        backLink: "/",
        backName:"Home",
        code:"401",
        text: "You are not authorized to access this resource"
    },
    "404":{
        backLink: "/",
        backName:"Home",
        code:"404",
        text: "Page not found"
    }
}

const PATHS = [
    {menuItem:true,menuName:"Home",path:"/",component:<Home/>},
    {menuItem:true,menuName:"About",path:"/about",component:<About/>},
    {menuItem:true,menuName:"Gallery",path:"/gallery",component:<Gallery/>},
    {menuItem:true,menuName:"Menu",path:"/menu",component:<Menu/>},
    {menuItem:true,menuName:"Contact",path:"/contact",component:<Contact/>},
    {menuItem:false,menuName:"",path:"/comingsoon",component:<Comingsoon/>},
    {menuItem:false,menuName:"",path:"/privacy",component:<Privacy/>},
    {menuItem:false,menuName:"",path:"*",component:<Error errorData={ERRORS['404']}/>}
];

export {
    ERRORS,
    PATHS
}