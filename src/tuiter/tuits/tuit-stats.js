import React from "react";

const TuitStats = ({tuit}) => {
    return (
        <ul className="nav mt-2 nav-fill text-secondary">
            <li className="nav-item">
                <i className="bi bi-chat fa-sm me-2"></i>{tuit.replies}
            </li>
            <li className="nav-item">
                <i className="bi bi-repeat fa-sm me-2"></i>{tuit.retuits}
            </li>
            <li className="nav-item">
                {
                    tuit.liked &&
                    <i className="bi bi-heart-fill fa-sm me-2" style={{'color': 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="bi bi-heart fa-sm me-2"></i>
                }{tuit.likes}
            </li>
            <li className="nav-item">
                <i className="bi bi-share fa-sm me-2"></i>
            </li>
        </ul>
    )
}

export default TuitStats;