const productDetails = {
    title: "Awesome Product",
    description: "Our amazing product offers cutting-edge features and unparalleled performance. Discover a new level of excellence with Archer.",
    price: "$99.99",
   
};


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('product-description').textContent = productDetails.description;
    document.getElementById('product-price').textContent = productDetails.price;
    document.getElementById('product-info').getElementsByTagName('h2')[0].textContent = productDetails.title;

    document.getElementById('buy-button').addEventListener('click', function () {
        alert('Thank you for your purchase!');
    });
});