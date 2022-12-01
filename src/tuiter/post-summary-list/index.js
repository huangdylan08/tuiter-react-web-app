import React from "react";
import {useSelector} from "react-redux";
import PostSummaryListItem from "./post-summary-item";


const PostSummaryList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);

    return (
        <ul className="list-group">
            {
               loading &&
               <li className="list-group-item">
                 Loading...
               </li>
             }
            {
                tuits.map(post =>
                    <PostSummaryListItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};

export default PostSummaryList;