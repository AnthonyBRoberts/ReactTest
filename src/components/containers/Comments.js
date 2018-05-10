import React, { Component } from 'react'
import { Comment, CreateComment } from '../presentation/'
import { APIManager } from '../../utils'

class Comments extends Component {
	constructor(){
		super()
		this.state = {
			list: []
		}
	}

	componentDidMount(){
		APIManager.get('http://localhost:3000/api/comment', null, (err, res) => {
		  	if (err){
		  		alert("Error" + err.message)
		  		return
		  	}
		  	this.setState({
				list: res.results
			})
		})
	}

	submitComment(comment){
		let newComment = Object.assign({}, comment)
		APIManager.post('http://localhost:3000/api/comment', newComment, (err, res) => {
		  	if (err){
		  		alert("Error" + err.message)
		  		return
		  	}
			let CommentList = Object.assign([], this.state.list)
			CommentList.push(res.result)
			this.setState({
				list: CommentList
			})
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
				<h2>Comments List</h2>
				<div className="jumbotron">
					<ul style={{listStyleType:'none', padding:0}}>{commentList}</ul>
					<CreateComment onCreate={this.submitComment.bind(this)}/> 
				</div>
			</div>
		)
	}
}

export default Comments
