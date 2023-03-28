// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {allData, deleteComment, toggleIsLike} = props
  const {name, comment, time, isLiked, logoColor, id} = allData

  const imageUpdate = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const commentDel = () => {
    deleteComment(id)
  }

  const clickLike = () => {
    toggleIsLike(id)
  }

  return (
    <li className="list-card">
      <div className="comment-list">
        <div className={logoColor}>
          <p className="name-logo">{name ? name[0].toUpperCase() : ''}</p>
        </div>
        <div>
          <div className="name-time-card">
            <p className="name-card">{name}</p>
            <p className="time-card">{formatDistanceToNow(time)}</p>
          </div>
          <p className="comment-card">{comment}</p>
        </div>
      </div>
      <div className="btn-card">
        <div className="like-card">
          <img src={imageUpdate} alt="unlike" className="like-img" />
          <button
            type="button"
            className={isLiked ? 'liked-btn' : 'like-btn'}
            onClick={clickLike}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={commentDel}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line-card" />
    </li>
  )
}

export default CommentItem
