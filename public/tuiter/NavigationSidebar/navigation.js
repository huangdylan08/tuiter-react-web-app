import NavigationSidebarList from "./NavigationSidebarList.js";

const NavigationSidebar = (activeItem) => {
 return(`
   <div class="list-group">
     ${
       NavigationSidebarList.map(item => {
         if (item.title == activeItem) {
           return(`
                       <a class="list-group-item active" href=${item.link}>
                         <div class="row">
                           <div class="col-1"><i class="${item.icon}"></i></div>
                           <div class="col d-none d-xl-block">${item.title}</div>
                         </div>
                       </a>
                    `)
         }
         return(`
            <a class="list-group-item" href=${item.link}>
              <div class="row">
                <div class="col-1"><i class="${item.icon}"></i></div>
                <div class="col d-none d-xl-block">${item.title}</div>
              </div>
            </a>
         `)
       }).join('')
     }
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;