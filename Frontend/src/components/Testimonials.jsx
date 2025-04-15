import Slider from 'react-slick';
import '../styles/Testimonials.css';

const testimonials = [
  { id: 1, quote: 'Found the exact part in minutes—amazing service!', author: 'Sarah K.', rating: 5 },
  { id: 2, quote: 'The mechanic was professional and on time!', author: 'John M.', rating: 5 },
  { id: 3, quote: 'Managing my appointments has never been easier.', author: 'Mike T.', rating: 4 },
];

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <section className="testimonials">
      <h2>Loved by Our Community</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="author">– {testimonial.author}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;