import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js"

const WhoToFollowList = () => {
    return(`
        <div class="card-columns">
            <div class="card bg-light text-white">
                <div class="row my-2 mx-1">
                    <b>Who to follow</b>
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