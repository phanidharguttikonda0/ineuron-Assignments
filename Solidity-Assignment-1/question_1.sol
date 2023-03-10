//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;

contract structure {
    struct Book {
        string title;
        string author;
        uint256 bookID;
        uint256 price;
    }
    // define a struct- name of the struct variable to represent the struct
    Book book;

    function setBook() public {
        book = Book("Blokchain for beginners", "Ineuron", 4, 1000);
    }

    function getBookId() public view returns (uint256) {
        return book.bookID;
    }

    function getTitle() public view returns(string memory){
        string storage str = book.title ;
        return str ;
    } 
}
