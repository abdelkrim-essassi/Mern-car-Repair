import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/MechanicEarnings.css';

const earningsData = [
  { month: 'Jan', earnings: 200 },
  { month: 'Feb', earnings: 250 },
  { month: 'Mar', earnings: 300 },
  { month: 'Apr', earnings: 450 },
];

const transactions = [
  { id: 1, date: '2025-04-10', customer: 'Sarah K.', amount: 150 },
  { id: 2, date: '2025-04-05', customer: 'John M.', amount: 300 },
];

function MechanicEarnings() {
  const totalEarnings = earningsData.reduce((sum, entry) => sum + entry.earnings, 0);

  return (
    <div className="mechanic-earnings">
      <h3>Earnings</h3>
      <div className="earnings-overview">
        <h4>Total Earnings: ${totalEarnings.toFixed(2)}</h4>
        <div className="earnings-chart">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="earnings" stroke="#F97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="transactions">
        <h4>Recent Transactions</h4>
        {transactions.map((txn) => (
          <div key={txn.id} className="transaction">
            <p><strong>Date:</strong> {txn.date}</p>
            <p><strong>Customer:</strong> {txn.customer}</p>
            <p><strong>Amount:</strong> ${txn.amount.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MechanicEarnings;