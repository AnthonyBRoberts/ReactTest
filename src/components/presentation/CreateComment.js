import React, { Component } from 'react'

class CreateComment extends Component {
	constructor(){
		super()
		this.state = {
			comment: {
				username: '',
				body: ''
			},
		}
	}

	updateComment(e){
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment[e.target.id] = e.target.value
		this.setState({
			comment: updatedComment
		})
	}

	submitComment(e){
		this.props.onCreate(this.state.comment)
		this.setState({
			comment: {
				username: '',
				body: ''
			}
		})
	}

	render(){
		return (
			<div>
				<input id="username" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="username" /><br />
				<input id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment Text" /><br />
				<button onClick={this.submitComment.bind(this)} className="btn btn-info">Post it!</button>
			</div>
		)
	}
}

export default CreateComment
	