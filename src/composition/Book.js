import React, { Component } from 'react';
import './Book.css';


class Book extends Component {

    manageAuthors(volumeInfo) {

        let owners = '';

        if ("authors" in volumeInfo) {

            owners = volumeInfo.authors.join(', ');
        }
        else if ("publisher" in volumeInfo) {
              owners = volumeInfo.publisher;
        }
    
        return(owners);

    }

    manageSalesPrice(saleInfo) {

        let price = '';

        switch(saleInfo.saleability) {
            case 'FREE':                price = 'Free';
                                        break;
            case 'NOT_FOR_SALE':        price = 'Not for sale';
                                        break;
            case 'FOR_SALE':        
            case 'FOR_SALE_AND_RENTAL': price = `${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}`;
                                        break;
            default:                    price = 'Unknown';
        }

        return(price);
    }

    manageImage(volumeInfo) {

        let thumbnail = '';

        if ("imageLinks" in volumeInfo) {

           thumbnail = volumeInfo.imageLinks.smallThumbnail;
        }
   
        return(thumbnail);
    }

    render() {

        return (
            <div className='book__single'>
                <h2>{this.props.book.volumeInfo.title}</h2>
                <h3>{this.props.book.volumeInfo.subtitle}</h3>
                <div className='book__information'>
                    <div className='book__image'>
                        <img src={this.manageImage(this.props.book.volumeInfo)} alt='' />
                    </div>
                    <div className='book__specifics'>
                        <p className='book__detail'>
                            <span className='book__detail_type'>Author(s): </span>
                            {this.manageAuthors(this.props.book.volumeInfo)}
                        </p>
                        <p className='book__detail'>
                            <span className='book__detail_type'>Price: </span>
                            {this.manageSalesPrice(this.props.book.saleInfo)}
                        </p>
                        <p className='book__detail'>{this.props.book.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;


