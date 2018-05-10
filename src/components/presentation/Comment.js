import React, { Component } from 'react'
import styles from './styles'

class Comment extends Component {
	render(){
		
		return (
			<div style={{padding: "5px 5px 5px 10px"}}>
				<p style={{fontSize:20, fontWeight: 600}}>
					{ this.props.currentComment.body }
				</p>
				{ this.props.currentComment.username }
				
				<span> | </span>
				{ this.props.currentComment.timestamp }
				<hr />
			</div>
		)
	}
}

export default Comment
