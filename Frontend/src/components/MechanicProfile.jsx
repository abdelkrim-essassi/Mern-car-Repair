import { useState } from 'react';
import '../styles/MechanicProfile.css';

function MechanicProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Smith',
    location: 'New York',
    specialization: 'Brakes',
    experience: '10 years',
    tariffs: '$50/hour',
    availability: ['2025-04-14 09:00', '2025-04-14 11:00', '2025-04-15 14:00'],
  });
  const [newAvailability, setNewAvailability] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.specialization) newErrors.specialization = 'Specialization is required';
    if (!formData.experience) newErrors.experience = 'Experience is required';
    if (!formData.tariffs || !/^\$\d+(\.\d{2})?\/hour$/.test(formData.tariffs))
      newErrors.tariffs = 'Tariffs must be in $X/hour format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddAvailability = () => {
    if (newAvailability && !formData.availability.includes(newAvailability)) {
      setFormData({
        ...formData,
        availability: [...formData.availability, newAvailability],
      });
      setNewAvailability('');
    }
  };

  const handleRemoveAvailability = (slot) => {
    setFormData({
      ...formData,
      availability: formData.availability.filter((s) => s !== slot),
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsEditing(false);
      alert('Profile updated successfully!');
    }
  };

  return (
    <div className="mechanic-profile">
      <h3>Profile</h3>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && <span className="error">{errors.location}</span>}
          </div>
          <div className="form-group">
            <label>Specialization</label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
            {errors.specialization && <span className="error">{errors.specialization}</span>}
          </div>
          <div className="form-group">
            <label>Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
            {errors.experience && <span className="error">{errors.experience}</span>}
          </div>
          <div className="form-group">
            <label>Tariffs</label>
            <input
              type="text"
              name="tariffs"
              value={formData.tariffs}
              onChange={handleChange}
            />
            {errors.tariffs && <span className="error">{errors.tariffs}</span>}
          </div>
          <div className="form-group">
            <label>Availability</label>
            <div className="availability-list">
              {formData.availability.map((slot, index) => (
                <div key={index} className="availability-slot">
                  <span>{slot}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveAvailability(slot)}
                    className="remove-slot"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="add-availability">
              <input
                type="datetime-local"
                value={newAvailability}
                onChange={(e) => setNewAvailability(e.target.value)}
              />
              <button type="button" onClick={handleAddAvailability}>
                Add Slot
              </button>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Location:</strong> {formData.location}</p>
          <p><strong>Specialization:</strong> {formData.specialization}</p>
          <p><strong>Experience:</strong> {formData.experience}</p>
          <p><strong>Tariffs:</strong> {formData.tariffs}</p>
          <p><strong>Availability:</strong></p>
          <ul>
            {formData.availability.map((slot, index) => (
              <li key={index}>{slot}</li>
            ))}
          </ul>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default MechanicProfile;