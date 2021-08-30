class BookShelf {
    bookShelf;
    element;
    constructor(...books) {
        this.bookShelf = new Set(books);
        this.createHtml();
        this.bookShelf.forEach(book => {
            if (book.quantity) {
                this.element.appendChild(book.element);

                book.element.addEventListener('bookChange', (e) => {
                    if (e.target.dataset.quantity == 0) {
                        e.target.remove();
                    }
                })
            }
        });
    }

    createHtml() {
        this.element = document.createElement('div');
        this.element.classList.add('books');
        document.querySelector('body').appendChild(this.element);
    }

}


class Book {
    author;
    pages;
    title;
    element;
    price;
    quantity;

    static bookChange = new Event('bookChange')
    // static bookShelf = new Set();

    constructor(title, pages, price, quantity, ...author) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
        this.createHtml();

        // this.constructor.bookShelf.add(this); // statinis kreipinys objektiniame kontekste
    }

    createHtml() {
        let authors = '';
        for (const author of this.author) {
            authors += `<h3>${author}</h3>`;
        }
        const html = `
        <h1>${this.title}</h1>` + authors +

            `
        <small>${this.pages}</small>
        <div>${this.price} EUR</div>
        <b>Kiekis: ${this.quantity} vnt.</b>
        <button>Pirkti</button>
        `;
        this.element = document.createElement('div');
        this.element.innerHTML = html;
        this.addCover();
        this.element.querySelector('button').addEventListener('click', () => {
            this.quantity--;
            console.log(this);
            this.element.dataset.quantity = this.quantity;
            this.element.querySelector('b').innerText = `Kiekis: ${this.quantity} vnt.`;
            window.dispatchEvent(this.constructor.bookChange);
        });
    }

    addCover() {
        this.element.classList.add('no-cover');
    }
}


class PinkBook extends Book {
    addCover() {
        this.element.classList.add('pink-cover');
    }
}

class YellowBook extends Book {
    addCover() {
        this.element.classList.add('yellow-cover');
    }
}



const book1 = new PinkBook('Penki mėnuliai', 258, 15.25, 12, 'Jonas Biliūnas');
const book12 = new Book('Penki mėnuliai', 258, 15.25, 10, 'Jonas Biliūnas');
const book2 = new YellowBook('Negirdėtos pasakos', 374, 30.10, 15, 'Ragana Piktoji', 'Ragana Zalioji');
const book3 = new Book('Didelės upės skonis', 142, 10.20, 0, 'Bebras Aštriadantis');
const book4 = new YellowBook('Drakono galvų trilogija', 890, 50.99, 4, 'Hobitas Trobitas');


// console.log(book1, book2, book3);
// console.log(Book.bookShelf);

const bs1 = new BookShelf(book1, book2, book3);
const bs2 = new BookShelf(book4, book12);