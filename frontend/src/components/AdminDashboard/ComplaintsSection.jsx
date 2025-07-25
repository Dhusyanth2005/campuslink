import React from 'react';
import { Calendar } from 'lucide-react';

const ComplaintsSection = ({ complaints, setComplaints, getStatusColor, getPriorityColor, formatDate }) => {
  const updateComplaintStatus = (id, newStatus) => {
    setComplaints(complaints.map(c => 
      c.id === id ? { ...c, status: newStatus } : c
    ));
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Complaints Management</h2>
        <p className="text-gray-600">Monitor and resolve student complaints</p>
      </div>

      <div className="space-y-4">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{complaint.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(complaint.status)}`}>
                    {complaint.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(complaint.priority)}`}>
                    {complaint.priority}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                    {complaint.category}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{complaint.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Student:</span>
                    <p>{complaint.studentName}</p>
                    <p>{complaint.studentId}</p>
                  </div>
                  <div>
                    <span className="font-medium">Contact:</span>
                    <p>{complaint.contact}</p>
                  </div>
                  <div>
                    <span className="font-medium">Room:</span>
                    <p>{complaint.room}</p>
                  </div>
                  <div>
                    <span className="font-medium">Assigned To:</span>
                    <p>{complaint.assignedTo}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-500">
                Submitted on {formatDate(complaint.date)}
              </span>
              <div className="flex space-x-2">
                {complaint.status === 'Pending' && (
                  <button
                    onClick={() => updateComplaintStatus(complaint.id, 'In Progress')}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Start Progress
                  </button>
                )}
                {complaint.status === 'In Progress' && (
                  <button
                    onClick={() => updateComplaintStatus(complaint.id, 'Resolved')}
                    className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                  >
                    Mark Resolved
                  </button>
                )}
                {complaint.status === 'Resolved' && (
                  <button
                    onClick={() => updateComplaintStatus(complaint.id, 'Pending')}
                    className="px-3 py-1 bg-gray-600 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors"
                  >
                    Reopen
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsSection;