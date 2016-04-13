import React, { Component } from 'react';
import { connect } from 'react-redux'

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}


	render () {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//glue between react and redux
//we want this.props.books so we return state.books
function mapStateToProps(state) {
	// Whatever is returned will show up as props 
	// inside of BookList
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);