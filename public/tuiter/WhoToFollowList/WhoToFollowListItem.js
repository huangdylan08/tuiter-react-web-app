const WhoToFollowListItem = (who) => {
    return(`
        <div class="card bg-light text-white">
            <div class="row my-2 mx-1">
                <div class="col-2 g-0">
                    <img class="img-fluid wd-user-image"
                         src="${who.avatarIcon}"/>
                </div>
                <div class="col-6" style="z-index: 1;">
                    <b>${who.userName}</b>
                    <i class="fa-solid fa-circle-check"></i><br/>
                    <span>@${who.handle}</span>
                </div>
                <div class="col-4 g-0">
                    <button class="btn btn-primary wd-tweet-button">Follow</button>
                </div>
            </div>
        </div>
    `)
}
export default WhoToFollowListItem;