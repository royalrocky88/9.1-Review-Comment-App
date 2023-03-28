// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentData: []}

  onName = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onComment = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const backgroundColorClass = `color-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComments = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      time: new Date(),
      isLiked: false,
      logoColor: backgroundColorClass,
    }

    this.setState(oldValue => ({
      commentData: [...oldValue.commentData, newComments],
      nameInput: '',
      commentInput: '',
    }))
  }

  deleteComment = event => {
    const {commentData} = this.state
    this.setState({
      commentData: commentData.filter(comment => comment.id !== event),
    })
  }

  toggleIsLike = id => {
    this.setState(oldValue => ({
      commentData: oldValue.commentData.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {nameInput, commentInput, commentData} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head-card">Comments</h1>

          <div className="comment-container">
            <form className="form-card" onSubmit={this.onFormSubmit}>
              <p className="dialog-card">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="input-card"
                value={nameInput}
                onChange={this.onName}
              />
              <textarea
                type="text"
                placeholder="Your Comment"
                className="input-card"
                rows="6"
                value={commentInput}
                onChange={this.onComment}
              />
              <button type="submit" className="comment-btn">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comment-image"
              alt="comments"
            />
          </div>
          <hr className="line-card" />
          <p className="dialog-card">
            <span className="count-card">{commentData.length}</span>
            Comments
          </p>
          <ul className="list-container">
            {commentData.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                allData={eachComment}
                deleteComment={this.deleteComment}
                toggleIsLike={this.toggleIsLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
