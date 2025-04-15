import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ProductShowcase.css';

const products = [
  { id: 1, name: 'Brake Pads', price: 29.99, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Oil Filter', price: 12.99, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Air Filter', price: 15.99, image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Spark Plugs', price: 8.99, image: 'https://via.placeholder.com/200' },
  { id: 5, name: 'Car Battery', price: 89.99, image: 'https://via.placeholder.com/200' },
];

function ProductShowcase() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="product-showcase">
      <h2>Top Picks in Parts</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ProductShowcase;