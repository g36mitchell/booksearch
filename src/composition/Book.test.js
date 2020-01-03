import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book.js';

/*  smoke test */
it('renders without crashing', () => {
    const testbook = {
        "kind": "books#volume",
        "id": "A3WHDwAAQBAJ",
        "etag": "M5vMhJrjPFQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/A3WHDwAAQBAJ",
        "volumeInfo": {
            "title": "On Flowers",
            "subtitle": "Lessons from an Accidental Florist",
            "authors": [
                "Amy Merrick"
            ],
            "publisher": "Artisan Books",
            "publishedDate": "2019-10-15",
            "description": "A singular, personal celebration of the beauty and possibilities of nature Amy Merrick is a rare and special kind of artist who uses flowers to help us see the familiar in a completely new way. Her gift is to revel in the unexpected—like a sunny spring arrangement housed in a paper coffee cup—and to overturn preconceptions, whether she’s transforming a bouquet of supermarket carnations into a breathtaking centerpiece or elevating wild and weedy blooms foraged from city sidewalks. She uses the beauty that is waiting to be discovered all around us—in leaves, branches, seedpods, a fallen blossom—to tell a story of time and place. Merrick begins On Flowers with a primer containing all her hard-won secrets on the art of flower arranging, from selecting materials to mastering pleasing proportions. Then she brings readers along on her journey, with observations on flowers in New York City and at her family’s summer home in rural New Hampshire, working on a flower farm off the coast of Washington State, and studying ikebana in a jewel-box flower shop in Kyoto. We learn how to send flowers like a florist, and how to arrange them like a farm girl. We discover the poignancy in humble wildflowers, and also celebrate the luxury of fragrant blousy blooms. Collected here is an anthology of floral inspiration, a love letter to nature by an exceptional, accidental florist.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_13",
                    "identifier": "9781579659493"
                },
                {
                    "type": "ISBN_10",
                    "identifier": "1579659497"
                }
            ],
            "readingModes": {
                "text": true,
                "image": true
            },
            "pageCount": 240,
            "printType": "BOOK",
            "categories": [
                "Crafts & Hobbies"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "1.2.1.0.preview.3",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=A3WHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=A3WHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=A3WHDwAAQBAJ&printsec=frontcover&dq=flowers&hl=&as_brr=5&cd=1&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=A3WHDwAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=A3WHDwAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
                "amount": 19.95,
                "currencyCode": "USD"
            },
            "retailPrice": {
                "amount": 9.99,
                "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=A3WHDwAAQBAJ&rdid=book-A3WHDwAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
                {
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 1.995E7,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 9990000.0,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }
            ]
        },
        "accessInfo": {
            "country": "US",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/On_Flowers-sample-epub.acsm?id=A3WHDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.com/books/download/On_Flowers-sample-pdf.acsm?id=A3WHDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=A3WHDwAAQBAJ&hl=&as_brr=5&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "We discover the poignancy in humble wildflowers, and also celebrate the luxury of fragrant blousy blooms. Collected here is an anthology of floral inspiration, a love letter to nature by an exceptional, accidental florist."
        }
    };

    const div = document.createElement('div');
    ReactDOM.render(<Book book={testbook} />, div);
    ReactDOM.unmountComponentAtNode(div);
});