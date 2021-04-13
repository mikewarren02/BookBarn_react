import {Component} from 'react'


class BookBarn extends Component {
    render(){
        const books = this.props.books
        const bookItems = books.map((book, index) => {
            return <div className='book'>
                <h2>{book.title}</h2>
                <h3>By: {book.author}</h3>
                <img className='bookPic' src = {`https://github.com/benoitvallon/100-best-books/blob/master/static/${book.imageLink}?raw=true`} />
                <p>Launguage: {book.language}</p>
                </div>
        })

        return(
            <div className="bookBarn">
                <h1 className= 'title'>Books</h1>
                {bookItems}
            </div>
        )
    }
}


export default BookBarn