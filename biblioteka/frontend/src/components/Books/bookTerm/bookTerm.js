import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td><i>{props.term.availableCopies > 0 ? props.term.availableCopies: "no available copies"}</i></td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-info"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <a title={"Taken"} className={"btn btn-info ml-2"}
                   onClick={() => props.onTaken(props.term.id)}>
                    Mark as taken
                </a>

            </td>



        </tr>
    )
}

export default bookTerm;
