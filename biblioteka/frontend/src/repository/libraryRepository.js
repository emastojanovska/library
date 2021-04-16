import axios from '../custom-axios/axois'

const libraryService ={
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchBooks: () =>{
        return axios.get("/books");
    },
    fetchCategories:()=>{
        return axios.get("/categories");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`)
    },
    markAsTaken: (id) =>{
        return axios.get(`/books/taken/${id}`)
    },
    addBook: (name, availableCopies, author, category)=>{
        return axios.post("/books/add",{
            "name": name,
            "availableCopies": availableCopies,
            "author": author,
            "category": category
        });
    },
    editBook: (id, name, availableCopies, author, category)=>{
        return axios.put(`/books/edit/${id}`,{
            "name": name,
            "availableCopies": availableCopies,
            "author": author,
            "category": category
        })
    },
    getBook: (id) =>{
        return axios.get(`/books/${id}`)
    }
}
export default libraryService;