import React, { Component } from 'react'
import Comment from '../presentation/Comment'

class Comments extends Component {
	constructor(){
		super()
		this.state = {
			comment: {
				username: '',
				comment: ''
			},
			list: [
				{comment: 'Comment 1', timestamp: '10:00', username: 'you'},
				{comment: 'Comment 2', timestamp: '10:30', username: 'me'},
				{comment: 'Comment 5', timestamp: '12:00', username: 'suckit'},
			]
		}
	}

	submitComment(e){
		console.log("Wurd, submitComment button clicked" + JSON.stringify(this.state.comment))
		let newComment = Object.assign({}, this.state.comment)
		newComment.timestamp = new Date().getTime()
		let commentList = Object.assign([], this.state.list)
		commentList.push(newComment)
		this.setState({
			list: commentList
		})
	}

	updateUsername(e){
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['username'] = e.target.value
		this.setState({
			comment: updatedComment
		})
	}

	updateComment(e){
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment['comment'] = e.target.value
		this.setState({
			comment: updatedComment
		})
	}

	render(){
		const commentList = this.state.list.map((c, i)=> {
			return (
				<li key={i}><Comment currentComment={c} /></li>
			)
		})
		return (
			<div>
				<h2>Comments: Zone 1</h2>
				<div className="jumbotron">
					<ul style={{listStyleType:'none', padding:0}}>{commentList}</ul>
					<input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
					<input onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Message" /><br />
					<button onClick={this.submitComment.bind(this)} className="btn btn-info">Post it!</button>
				</div>
			</div>
		)
	}
}

export default Comments
