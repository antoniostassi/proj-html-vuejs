import { reactive } from 'vue';
export const store = reactive({

    navbarItems: [
        {
            linkName: "Home",
            linkURL: "#"
        },
        {
            linkName: "Shop",
            linkURL: "#"
        },
        {
            linkName: "About",
            linkURL: "#"
        },
        {
            linkName: "Gallery",
            linkURL: "#"
        },
        {
            linkName: "Locations",
            linkURL: "#"
        },
        {
            linkName: "Journal",
            linkURL: "#"
        },
        {
            linkName: "Contact",
            linkURL: "#"
        },
        {
            linkName: "My Account",
            linkURL: "#"
        }
    ],

    ourProducts: [
        {
            productName: "Choco Chip Cookies",
            productCategory: "Cookies, Pastries",
            productPrice:"$19.00 - $39.00",
            productImg: "choco-chip-cookies.jpg"
        },
        {
            productName: "Straberry Jam Cookies",
            productCategory: "Cookies, Pastries",
            productPrice:"$24.00 - $62.00",
            productImg: "strawberry-jam-cookies.jpg"
        },
        {
            productName: "Strawberry Donut",
            productCategory: "Donuts, Pastries",
            productPrice:"$24.00 - $42.00",
            productImg: "strawberry-donut.jpg"
        },
        {
            productName: "Perfect Macarons",
            productCategory: "Cookies, Pastries",
            productPrice:"$18.00 - $52.00",
            productImg:"perfect-macarons.jpg"
        },
        {
            productName: "Home Bread",
            productCategory: "Bread, Bakery",
            productPrice:"$5.00 - $15.00",
            productImg:"home-bread.jpg"
        },
        {
            productName: "Glazed Pancake with Lemon",
            productCategory: "Cakes, Pastries",
            productPrice:"$19.00",
            productImg:"glazed-pancake-with-lemon.jpg"
        },
        {
            productName: "Blackberry Stuffed Bread",
            productCategory: "Bread, Bakery",
            productPrice:"$12.00 - $20.00",
            productImg:"blackberry-stuffed-bread.jpg"
        }
    ],


});