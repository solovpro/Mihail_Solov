import React from 'react';
import s from './Books.module.css';
import Books from "./Books";
import {connect} from 'react-redux';

class BooksContainer extends React.Component {

    render() {
        return (
            <div className={s.booksContainer}>
                <div className={s.maneText}>
                    Книги
                    <hr className={s.hr}/>
                </div>
                {this.props.books.map(b => <Books book={b} key={b.id}/>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.booksPage.books,
    }
}

export default connect(mapStateToProps, {})(BooksContainer);