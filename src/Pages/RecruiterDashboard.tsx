import React from 'react';
import { 
  Users, 
  Briefcase, 
  Building,
  TrendingUp
} from 'lucide-react';
import Header from '../components/Header';

const RecruiterDashboard = () => {
  // Sample data
  const clients = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Global Finance Inc',
      status: 'Active'
    }
  ];

  const positions = [
    {
      id: 1,
      positionName: 'Senior Frontend Developer',
      clientName: 'TechCorp Solutions',
      recruiter: 'Amit Singh',
      submittedResumes: 7,
      targetedResumes: 10,
      status: 'Open'
    },
    {
      id: 2,
      positionName: 'DevOps Engineer',
      clientName: 'TechCorp Solutions',
      recruiter: 'Neha Agarwal',
      submittedResumes: 3,
      targetedResumes: 8,
      status: 'Open'
    }
  ];

  const recruiters = [
    {
      id: 1,
      name: 'Amit Singh',
      activePositions: 2,
      submittedResumes: 15,
      status: 'Active',
      team: 'Team A'
    },
    {
      id: 2,
      name: 'Neha Agarwal',
      activePositions: 1,
      submittedResumes: 12,
      status: 'Active',
      team: 'Team B'
    }
  ];

  // Candidate status counts
  const candidateStatusCounts = {
    r1: 5,
    r2: 3,
    r3: 2,
    r4: 1,
    r5: 1,
    f2f: 4,
    offered: 2,
    accepted: 3,
    resigned: 1,
    joined: 8
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50">
    <Header />
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Team performance and metrics overview</p>
      </div>
      {/* This Week's Activity */}
      <div className=" gap-6">
        {/* Interview Scheduled This Week */}
        <div className="bg-white p-6 rounded-lg shadow border mb-6">
          <h3 className="text-lg font-semibold mb-4">Interviews Scheduled This Week</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Candidate</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Recruiter</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Last Followup</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Next Followup</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Rahul Sharma</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Senior Frontend</td>
                  <td className="px-4 py-3 text-sm text-gray-900">TechCorp</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Amit Singh</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <div>July 17, 2PM</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">July 15</td>
                  <td className="px-4 py-3 text-sm text-gray-500">July 18</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Priya Patel</td>
                  <td className="px-4 py-3 text-sm text-gray-900">DevOps Eng</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Global Finance</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Neha Agarwal</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <div>July 18, 10AM</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">July 16</td>
                  <td className="px-4 py-3 text-sm text-gray-500">July 19</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-900">Arjun Kumar</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Full Stack</td>
                  <td className="px-4 py-3 text-sm text-gray-900">TechCorp</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Amit Singh</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <div>July 19, 3PM</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">July 17</td>
                  <td className="px-4 py-3 text-sm text-gray-500">July 20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Offered Candidates This Week */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Offered Candidates This Week</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Candidate</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Offer Date</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Offer Status</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Resignation</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Joining</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">CTC</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Follow-up</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-3 text-sm text-gray-900">Sneha Gupta</td>
                  <td className="px-3 py-3 text-sm text-gray-900">Backend Dev</td>
                  <td className="px-3 py-3 text-sm text-gray-900">TechCorp</td>
                  <td className="px-3 py-3 text-sm text-gray-900">July 14</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Accepted
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-sm text-gray-900">July 16</div>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Resigned
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-sm text-gray-900">Aug 15</div>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-900">₹16,50,000</td>
                  <td className="px-3 py-3">
                    <div className="text-xs text-gray-600">
                      <div>Offer: July 13</div>
                      <div>Resignation: July 15</div>
                      <div className="text-blue-600 font-medium">Joining: July 20</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-3 text-sm text-gray-900">Vikram Joshi</td>
                  <td className="px-3 py-3 text-sm text-gray-900">QA Lead</td>
                  <td className="px-3 py-3 text-sm text-gray-900">Global Finance</td>
                  <td className="px-3 py-3 text-sm text-gray-900">July 15</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Accepted
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-sm text-gray-500">Pending</div>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                      Not Resigned
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-sm text-gray-500">TBD</div>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                      Not Joined
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-900">₹14,25,000</td>
                  <td className="px-3 py-3">
                    <div className="text-xs text-gray-600">
                      <div>Offer: July 14</div>
                      <div className="text-orange-600 font-medium">Resignation: July 18</div>
                      <div className="text-gray-500">Joining: TBD</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-3 text-sm text-gray-900">Kavya Reddy</td>
                  <td className="px-3 py-3 text-sm text-gray-900">UI/UX Designer</td>
                  <td className="px-3 py-3 text-sm text-gray-900">TechCorp</td>
                  <td className="px-3 py-3 text-sm text-gray-900">July 16</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-sm text-gray-500">Pending</div>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                      Not Resigned
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-sm text-gray-500">TBD</div>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                      Not Joined
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-900">₹11,80,000</td>
                  <td className="px-3 py-3">
                    <div className="text-xs text-gray-600">
                      <div className="text-red-600 font-medium">Offer: July 18</div>
                      <div className="text-gray-500">Resignation: TBD</div>
                      <div className="text-gray-500">Joining: TBD</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-3 text-sm text-gray-900">Ravi Mehta</td>
                  <td className="px-3 py-3 text-sm text-gray-900">Data Analyst</td>
                  <td className="px-3 py-3 text-sm text-gray-900">Global Finance</td>
                  <td className="px-3 py-3 text-sm text-gray-900">July 12</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Accepted
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-sm text-gray-900">July 14</div>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Resigned
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-sm text-gray-900">Aug 12</div>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Joined
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-900">₹13,75,000</td>
                  <td className="px-3 py-3">
                    <div className="text-xs text-gray-600">
                      <div>Offer: July 11</div>
                      <div>Resignation: July 13</div>
                      <div>Joining: Aug 10</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Clients</p>
              <p className="text-2xl font-bold text-gray-900">
                {clients.filter(c => c.status === 'Active').length}
              </p>
              <p className="text-xs text-gray-500">Tagged to manager team</p>
            </div>
            <Building className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Positions</p>
              <p className="text-2xl font-bold text-gray-900">
                {positions.filter(p => p.status === 'Open').length}
              </p>
              <p className="text-xs text-gray-500">Open positions tagged to team</p>
            </div>
            <Briefcase className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Recruiters</p>
              <p className="text-2xl font-bold text-gray-900">
                {recruiters.filter(r => r.status === 'Active').length}
              </p>
              <p className="text-xs text-gray-500">Tagged to manager team</p>
            </div>
            <Users className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Position Performance */}
      <div>
      <div className=" mb-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Position Performance</h3>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              <option>View All Positions</option>
              <option>Active Positions Only</option>
              <option>Closed Positions Only</option>
              <option>High Priority Only</option>
              <option>This Month</option>
              <option>This Quarter</option>
            </select>
          </div>
          <div className="space-y-4">
            {positions.map(position => (
              <div key={position.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{position.positionName}</h4>
                    <p className="text-sm text-gray-600">{position.clientName}</p>
                    <p className="text-sm text-gray-500">Recruiter: {position.recruiter}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    position.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {position.status}
                  </span>
                </div>
                
                {/* Resume Counts by Stage */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <div className="text-sm font-medium text-blue-800">7</div>
                    <div className="text-xs text-blue-600">Submitted</div>
                  </div>
                  <div className="text-center bg-yellow-50 p-2 rounded">
                    <div className="text-sm font-medium text-yellow-800">5</div>
                    <div className="text-xs text-yellow-600">R1</div>
                  </div>
                  <div className="text-center bg-green-50 p-2 rounded">
                    <div className="text-sm font-medium text-green-800">3</div>
                    <div className="text-xs text-green-600">R2</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="text-center bg-purple-50 p-2 rounded">
                    <div className="text-sm font-medium text-purple-800">2</div>
                    <div className="text-xs text-purple-600">R3</div>
                  </div>
                  <div className="text-center bg-indigo-50 p-2 rounded">
                    <div className="text-sm font-medium text-indigo-800">1</div>
                    <div className="text-xs text-indigo-600">Offered</div>
                  </div>
                  <div className="text-center bg-emerald-50 p-2 rounded">
                    <div className="text-sm font-medium text-emerald-800">1</div>
                    <div className="text-xs text-emerald-600">Joined</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Target: {position.targetedResumes} | Submitted: {position.submittedResumes}
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-50 px-2 py-1 rounded border">
                      <span className="text-xs text-purple-600 font-medium">TAT: </span>
                      <span className={`text-xs font-bold ${
                        position.id === 1 ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        {position.id === 1 ? '8 days' : '12 days'}
                      </span>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(position.submittedResumes / position.targetedResumes) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>  

        <div className="bg-white p-6 rounded-lg shadow border mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recruiter Performance</h3>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Year</option>
                <option>Custom Range</option>
              </select>
              <input 
                type="date" 
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <span className="flex items-center text-sm text-gray-500">to</span>
              <input 
                type="date" 
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
          <div className="space-y-4">
            {recruiters.map(recruiter => (
              <div key={recruiter.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{recruiter.name}</h4>
                    <p className="text-sm text-gray-600">Team {recruiter.team}</p>
                  </div>
                  <div className="text-right">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="text-lg font-bold text-blue-800">{recruiter.activePositions}</div>
                    <div className="text-xs text-blue-600">Active Positions</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="text-lg font-bold text-green-800">4</div>
                    <div className="text-xs text-green-600">Positions Closed</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="text-lg font-bold text-purple-800">{recruiter.submittedResumes}</div>
                    <div className="text-xs text-purple-600">Resumes Submitted</div>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded">
                    <div className="text-lg font-bold text-emerald-800">₹{recruiter.id === 1 ? '4.2L' : '3.8L'}</div>
                    <div className="text-xs text-emerald-600">Total Revenue</div>
                  </div>
                </div>

                {/* Revenue Breakdown */}
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-xs text-gray-600 mb-1">Revenue Breakdown:</div>
                  <div className="flex justify-between text-xs">
                    <span>Joined: ₹{recruiter.id === 1 ? '3.5L' : '3.2L'}</span>
                    <span>Pipeline: ₹{recruiter.id === 1 ? '0.7L' : '0.6L'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Candidate Synopsis */}
      <div className="bg-white p-6 rounded-lg shadow border mb-6">
        <h3 className="text-lg font-semibold mb-4">Candidate Synopsis</h3>
        <p className="text-sm text-gray-600 mb-4">Number of candidates in each status group</p>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {Object.entries(candidateStatusCounts).map(([status, count]) => (
            <button
  key={status}
  className="bg-gray-50 hover:bg-gray-100 p-2 rounded-lg text-center transition-colors"
  onClick={() => window.location.href = '/submission-management'}
>
  <div className="text-lg font-bold text-blue-600">{count}</div>
  <div className="text-xs text-gray-600 uppercase">{status}</div>
</button>

          ))}
        </div>
      </div>

      
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default RecruiterDashboard;