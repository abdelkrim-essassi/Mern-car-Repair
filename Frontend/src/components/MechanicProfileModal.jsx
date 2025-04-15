import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../styles/MechanicProfileModal.css';

function MechanicProfileModal({ mechanic, closeModal }) {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [serviceDetails, setServiceDetails] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert('Please select a time slot.');
      return;
    }
    alert(`Appointment booked with ${mechanic.name} on ${selectedSlot} for: ${serviceDetails}`);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <h2>{mechanic.name}</h2>
        <div className="profile-details">
          <p><strong>Location:</strong> {mechanic.location}</p>
          <p><strong>Specialization:</strong> {mechanic.specialization}</p>
          <p><strong>Experience:</strong> {mechanic.experience}</p>
          <p><strong>Tariffs:</strong> {mechanic.tariffs}</p>
          <p><strong>Rating:</strong> {mechanic.rating} ★</p>
        </div>
        <div className="reviews">
          <h3>Reviews</h3>
          {mechanic.reviews.length > 0 ? (
            mechanic.reviews.map((review) => (
              <div key={review.id} className="review">
                <p>"{review.quote}"</p>
                <p className="review-author">– {review.author} ({review.rating} ★)</p>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
        <div className="availability">
          <h3>Availability</h3>
          <select
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
          >
            <option value="">Select a time slot</option>
            {mechanic.availability.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={handleBooking} className="booking-form">
          <textarea
            placeholder="Describe the service you need (e.g., Change brakes)"
            value={serviceDetails}
            onChange={(e) => setServiceDetails(e.target.value)}
            required
          />
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default MechanicProfileModal;