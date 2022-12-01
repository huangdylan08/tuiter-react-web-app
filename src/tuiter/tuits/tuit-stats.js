import React from "react";
import {changeLike} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
  from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    const changeLike0 = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1
        }))
    }
    return (
        <ul className="nav mt-2 nav-fill text-secondary">
            <li className="nav-item">
                <i className="bi bi-chat fa-sm me-2"></i>{tuit.replies}
            </li>
            <li className="nav-item">
                <i className="bi bi-repeat fa-sm me-2"></i>{tuit.retuits}
            </li>
            <li className="nav-item">
                {!tuit.liked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked: true
                    }))} className="bi bi-heart fa-sm me-2"></i>}
                {tuit.liked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes - 1,
                        liked: false
                    }))} className="bi bi-heart-fill fa-sm me-2" style={{'color': 'red'}}></i>}
                {tuit.likes}
            </li>


            <li className="nav-item">
                <i className="bi bi-share fa-sm me-2"></i>
            </li>
        </ul>
    )
}

export default TuitStats;