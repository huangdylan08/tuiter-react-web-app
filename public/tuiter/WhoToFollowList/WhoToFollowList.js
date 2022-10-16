import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js"

const WhoToFollowList = () => {
    return(`
        <div class="card-columns">
            <div class="card">
                <div class="row my-2 mx-1">
                    <b class="text-white">Who to follow</b>
                </div>
            </div>
            ${
                who.map(user => {
                    return(WhoToFollowListItem(user))
                }).join('')
            }
        </div>
    `)
};

export default WhoToFollowList;