import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
//import Navbar from "../components/Navbar";


class Search extends Component {
    getBooks = async (e) => {
        const bookName = e.target.elements.bookName.value;
        e.preventDefault();
        const api_call = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + bookName);
        const data = await api_call.json();
        for (var i = 0; i<data.items.length; i++) {
        var book = {
            title: data.items[i].volumeInfo.title,
            authors: data.items[i].volumeInfo.authors,
            description: data.items[i].volumeInfo.description,
            image: data.items[i].volumeInfo.imageLinks.thumbnail,
            link: data.items[i].volumeInfo.infoLink
        };
        console.log(book);
        }

     };
    render() {
        return(
            <div>
            
            <Jumbotron></Jumbotron>
            <Form getBooks={this.getBooks}></Form>
            </div>
        )
    }
}

export default Search;