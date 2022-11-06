const PostSummaryListItem = (post) => {
    return(`
        <div class="card bg-light text-white">
            <div class="row my-2 mx-2">
                <div class="col">
                    <div>${post.topic}</div>
                    <span>
                        <b>${post.userName}</b>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>- ${post.time}</span>
                    </span><br/>
                    <b>${post.title}</b>
                </div>
                <div class="col-sm-auto">
                    <img class="img-fluid wd-post-image"
                        src="${post.image}"/>
                </div>
            </div>
        </div>
    `)
};

export default PostSummaryListItem;