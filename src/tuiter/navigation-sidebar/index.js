import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const NavigationSidebar = () => {
   const {pathname} = useLocation();
   const paths = pathname.split('/')
   const active = "explore";

 return (
   <div className="list-group">
     <a href="" className="list-group-item">Tuiter</a>

     <Link to="/tuiter/home" className={`list-group-item
            ${active === 'home'?'active':''}`}>
        <div className="row">
            <div className="col-1"><i className="bi bi-house-fill position-relative"></i></div>
            <div className="col d-none d-xl-block">Home</div>
        </div>
     </Link>

     <Link to="/tuiter/explore" className={`list-group-item
             ${active === 'explore'?'active':''}`}>
         <div className="row">
             <div className="col-1"><i className="bi bi-hash position-relative"></i></div>
             <div className="col d-none d-xl-block">Explore</div>
         </div>
     </Link>

     <Link to="/tuiter/notifications" className={`list-group-item
             ${active === 'notifications'?'active':''}`}>
         <div className="row">
             <div className="col-1"><i className="bi bi-bell-fill position-relative"></i></div>
             <div className="col d-none d-xl-block">Notifications</div>
         </div>
     </Link>

     <Link to="/tuiter/messages" className={`list-group-item
             ${active === 'messages'?'active':''}`}>
         <div className="row">
             <div className="col-1"><i className="bi bi-envelope-fill position-relative"></i></div>
             <div className="col d-none d-xl-block">Messages</div>
         </div>
     </Link>

     <Link to="/tuiter/bookmarks" className={`list-group-item
             ${active === 'bookmarks'?'active':''}`}>
         <div className="row">
             <div className="col-1"><i className="bi bi-bookmark-fill position-relative"></i></div>
             <div className="col d-none d-xl-block">Bookmarks</div>
         </div>
     </Link>

     <Link to="/tuiter/lists" className={`list-group-item
             ${active === 'lists'?'active':''}`}>
         <div className="row">
             <div className="col-1"><i className="bi bi-list position-relative"></i></div>
             <div className="col d-none d-xl-block">Lists</div>
         </div>
     </Link>

     <Link to="/tuiter/profile" className={`list-group-item
             ${active === 'profile'?'active':''}`}>
         <div className="row">
             <div className="col-1"><i className="bi bi-person-fill position-relative"></i></div>
             <div className="col d-none d-xl-block">Profile</div>
         </div>
     </Link>

     <Link to="/tuiter/more" className={`list-group-item
             ${active === 'more'?'active':''}`}>
         <div className="row">
             <div className="col-1"><i className="bi bi-three-dots position-relative"></i></div>
             <div className="col d-none d-xl-block">More</div>
         </div>
     </Link>
   </div>
 );
};
export default NavigationSidebar;