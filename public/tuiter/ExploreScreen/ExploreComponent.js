import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row mb-2">
                <div class="col-11">
                    <span class="wd-search">
                        <i class="fa-solid fa-search"></i>
                        <input type="text" class="form-control wd-search-bar" placeholder="Search Twitter">
                    </span>
                </div>
                <!-- Settings Gear -->
                <a class="col-1" href="explore-settings.html">
                    <i class="fa-solid fa-cog fa-lg wd-gear"></i>
                </a>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                   <a class="nav-link active" href="for-you.html">
                       For you
                   </a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="trending.html">
                       Trending
                   </a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="news.html">
                       News
                   </a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="sports.html">
                       Sports
                   </a>
               </li>
               <li class="nav-item d-none d-md-block">
                   <a class="nav-link" href="entertainment.html">
                       Entertainment
                   </a>
               </li>
           </ul>
           <div class="card">
               <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
               <div class="card-img-overlay d-flex flex-column justify-content-end">
                   <b class="card-text text-white" style="font-size:30px">SpaceX's Starship</b>
               </div>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
