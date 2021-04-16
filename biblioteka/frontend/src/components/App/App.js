import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import BookEdit from "../Books/bookEdit/bookEdit";
import BookAdd from "../Books/bookAdd/bookAdd";
import Books from '../Books/bookList/books';
import Header from '../Header/header'
import libraryService from '../../repository/libraryRepository'
import Authors from '../Authors/authors'
class App extends Component{

    constructor(props){
        super(props);
        this.state={
            authors: [],
            books: [],
            categories: [],
            selectedBook: {}
        }
    }
    render() {
        return(
            <Router>
                <Header/>
                <main>
                    <Route path={"/authors"} exact render={()=><Authors authors={this.state.authors}/>}></Route>
                    <Route path={"/books/edit/:id"} exact render={()=>
                        <BookEdit books={this.state.books}
                                  authors={this.state.authors}
                                  categories={this.state.categories}
                                  onEditBook={this.editBook}
                                  book={this.state.selectedBook}/>}></Route>
                    <Route path={"/books/add"} exact render={()=>
                        <BookAdd books={this.state.books}
                                 authors={this.state.authors}
                                 categories={this.state.categories}
                                 onAddBook={this.addBook}/>}></Route>
                    <Route path={["/","/books"]} exact render={()=>
                        <Books books={this.state.books}
                               onDelete = {this.deleteBook}
                               onEdit={this.getBook}
                               onTaken={this.markAsTaken}
                        />}></Route>
                </main>
            </Router>

        );
    }
    componentDidMount() {
        this.loadAuthors();
        this.loadBooks();
        this.loadCategories();
    }

    loadAuthors = () => {
        libraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    loadBooks = () => {
        libraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadCategories = () => {
        libraryService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    deleteBook=(id) =>{
        libraryService.deleteBook(id)
            .then(()=>{
                this.loadBooks();
            })
    }

    markAsTaken=(id) =>{
        libraryService.markAsTaken(id)
            .then(()=>{
                this.loadBooks();
            })
    }

    addBook=(name, availableCopies, author, category) => {
        libraryService.addBook(name, availableCopies, author, category)
            .then(() => this.loadBooks())
    }

    getBook = (id) => {
        libraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook =(id, name, availableCopies, author, category)=>{
        libraryService.editBook(id, name, availableCopies, author, category)
            .then(()=>{this.loadBooks()})
    }



}


export default App;
