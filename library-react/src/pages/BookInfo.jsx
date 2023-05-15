import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

function BookInfo({ books }) {
  const { id } = useParams()
  const book = books.find(book => +book.id === +id)
  console.log(book)
  console.log(id)
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img"/>
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating}/>
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">
                    Summary
                  </div>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ratione minus, quo atque aut animi explicabo assumenda labore tempora non iste, nihil dolor iure, sed voluptate rem quae id consequuntur?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ratione minus, quo atque aut animi explicabo assumenda labore tempora non iste, nihil dolor iure, sed voluptate rem quae id consequuntur?
                  </p>
                </div>
                <button className="btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
            </div>
            {
              books
              .filter(book => book.rating === 5 && +book.id !== +id)
              .slice(0, 4)
              .map(book => <Book book={book} key={book.id} />)
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
