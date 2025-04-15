import { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';
import '../styles/AdminMechanics.css';

const initialMechanics = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    specialization: 'Brakes',
    status: 'Approved',
  },
  {
    id: 2,
    name: 'Emma Brown',
    email: 'emma.brown@example.com',
    specialization: 'Engine',
    status: 'Pending',
  },
];

function AdminMechanics() {
  const [mechanics, setMechanics] = useState(initialMechanics);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [editingMechanic, setEditingMechanic] = useState(null);

  const filteredMechanics = mechanics.filter((mechanic) => {
    const matchesSearch = mechanic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mechanic.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? mechanic.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (id) => {
    setMechanics(
      mechanics.map((mechanic) =>
        mechanic.id === id && mechanic.status === 'Pending'
          ? { ...mechanic, status: 'Approved' }
          : mechanic
      )
    );
  };

  const handleDelete = (id) => {
    setMechanics(mechanics.filter((mechanic) => mechanic.id !== id));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setMechanics(
      mechanics.map((mechanic) =>
        mechanic.id === editingMechanic.id ? { ...editingMechanic } : mechanic
      )
    );
    setEditingMechanic(null);
  };

  return (
    <div className="admin-mechanics">
      <h3>Manage Mechanics</h3>
      <div className="controls">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search mechanics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter">
          <select onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="">All Statuses</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
      {editingMechanic ? (
        <div className="edit-mechanic-form">
          <h4>Edit Mechanic</h4>
          <form onSubmit={handleSave}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={editingMechanic.name}
                onChange={(e) =>
                  setEditingMechanic({ ...editingMechanic, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={editingMechanic.email}
                onChange={(e) =>
                  setEditingMechanic({ ...editingMechanic, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Specialization</label>
              <input
                type="text"
                value={editingMechanic.specialization}
                onChange={(e) =>
                  setEditingMechanic({ ...editingMechanic, specialization: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                value={editingMechanic.status}
                onChange={(e) =>
                  setEditingMechanic({ ...editingMechanic, status: e.target.value })
                }
              >
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditingMechanic(null)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mechanics-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Specialization</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMechanics.map((mechanic) => (
                <tr key={mechanic.id}>
                  <td>{mechanic.name}</td>
                  <td>{mechanic.email}</td>
                  <td>{mechanic.specialization}</td>
                  <td>{mechanic.status}</td>
                  <td>
                    {mechanic.status === 'Pending' && (
                      <button onClick={() => handleApprove(mechanic.id)}>
                        <FaCheckCircle />
                      </button>
                    )}
                    <button onClick={() => setEditingMechanic(mechanic)}>
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(mechanic.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminMechanics;