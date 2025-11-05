import React, { useState } from "react";
import Header from "../components/Header";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Briefcase,
  Users,
  Building,
  FileText,
  Calendar,
  DollarSign,
  Clock,
  Download,
} from "lucide-react";

const RecruiterDashboard = () => {
  const [currentView, setCurrentView] = useState("list"); // 'list' or 'detail'
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);

  // Sample recruiter data
  const recruiters = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      mobile: "+1 (555) 123-4567",
      role: "Senior Technical Recruiter",
      positionAssigned: "Software Engineer, DevOps Engineer",
      spocToClients: "Microsoft, Google, Amazon",
      clientsRecruitingFor: "Microsoft, Google, Amazon, Netflix, Apple",
      submittedCandidates: [
        {
          candidate: "John Doe",
          position: "Software Engineer",
          client: "Microsoft",
          status: "Interview Scheduled",
          resume: "john_doe_resume.pdf",
          noticePeriod: "30 days",
          currentCTC: "$85,000",
          ctcBudget: "$90,000-$110,000",
          history:
            "Applied → Screening → Technical Round → Interview Scheduled",
        },
        {
          candidate: "Jane Smith",
          position: "DevOps Engineer",
          client: "Google",
          status: "Offer Extended",
          resume: "jane_smith_resume.pdf",
          noticePeriod: "60 days",
          currentCTC: "$95,000",
          ctcBudget: "$100,000-$120,000",
          history:
            "Applied → Screening → Technical Round → Final Round → Offer Extended",
        },
        {
          candidate: "Mike Wilson",
          position: "Software Engineer",
          client: "Amazon",
          status: "Rejected",
          resume: "mike_wilson_resume.pdf",
          noticePeriod: "30 days",
          currentCTC: "$80,000",
          ctcBudget: "$85,000-$100,000",
          history: "Applied → Screening → Technical Round → Rejected",
        },
      ],
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@company.com",
      mobile: "+1 (555) 987-6543",
      role: "Product Recruiter",
      positionAssigned: "Product Manager, UX Designer",
      spocToClients: "Meta, Uber",
      clientsRecruitingFor: "Meta, Uber, Airbnb, Spotify",
      submittedCandidates: [
        {
          candidate: "Emily Davis",
          position: "Product Manager",
          client: "Meta",
          status: "In Progress",
          resume: "emily_davis_resume.pdf",
          noticePeriod: "45 days",
          currentCTC: "$110,000",
          ctcBudget: "$120,000-$140,000",
          history: "Applied → Screening → Product Case Study → In Progress",
        },
        {
          candidate: "Alex Rodriguez",
          position: "UX Designer",
          client: "Uber",
          status: "Screening",
          resume: "alex_rodriguez_resume.pdf",
          noticePeriod: "30 days",
          currentCTC: "$75,000",
          ctcBudget: "$80,000-$95,000",
          history: "Applied → Screening",
        },
      ],
    },
    {
      id: 3,
      name: "Lisa Wang",
      email: "lisa.wang@company.com",
      mobile: "+1 (555) 456-7890",
      role: "Executive Recruiter",
      positionAssigned: "VP Engineering, Director of Product",
      spocToClients: "Tesla, SpaceX",
      clientsRecruitingFor: "Tesla, SpaceX, Stripe, Coinbase",
      submittedCandidates: [
        {
          candidate: "Robert Kim",
          position: "VP Engineering",
          client: "Tesla",
          status: "Final Round",
          resume: "robert_kim_resume.pdf",
          noticePeriod: "90 days",
          currentCTC: "$180,000",
          ctcBudget: "$200,000-$250,000",
          history:
            "Applied → Executive Screening → Leadership Interview → Final Round",
        },
      ],
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      "Interview Scheduled": "bg-blue-100 text-blue-800",
      "Offer Extended": "bg-green-100 text-green-800",
      Rejected: "bg-red-100 text-red-800",
      "In Progress": "bg-yellow-100 text-yellow-800",
      Screening: "bg-purple-100 text-purple-800",
      "Final Round": "bg-indigo-100 text-indigo-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const handleRowClick = (recruiter) => {
    setSelectedRecruiter(recruiter);
    setCurrentView("detail");
  };

  const handleBackToList = () => {
    setCurrentView("list");
    setSelectedRecruiter(null);
  };

  // List View Component
  const ListView = () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Recruiter Management Dashboard
              </h2>
              <p className="text-gray-600">
                Manage recruiters and track candidate submissions
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Recruiter Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role & Assignments
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client Relations
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recruiters.map((recruiter) => (
                      <tr
                        key={recruiter.id}
                        className="hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                        onClick={() => handleRowClick(recruiter)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <User className="h-5 w-5 text-indigo-600" />
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {recruiter.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="h-4 w-4 mr-2" />
                              {recruiter.email}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="h-4 w-4 mr-2" />
                              {recruiter.mobile}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center text-sm font-medium text-gray-900">
                              <Briefcase className="h-4 w-4 mr-2" />
                              {recruiter.role}
                            </div>
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Positions:</span>{" "}
                              {recruiter.positionAssigned}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center text-sm text-gray-900">
                              <Users className="h-4 w-4 mr-2" />
                              <span className="font-medium">SPOC:</span>
                            </div>
                            <div className="text-sm text-gray-600">
                              {recruiter.spocToClients}
                            </div>
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">All Clients:</span>{" "}
                              {recruiter.clientsRecruitingFor}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Detail View Component
  const DetailView = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackToList}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to List
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">
                Recruiter Details
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Recruiter Profile Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-6">
            <div className="flex-shrink-0 h-16 w-16">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
                <User className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedRecruiter.name}
              </h2>
              <p className="text-lg text-gray-600">{selectedRecruiter.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-sm font-medium text-gray-700">
                  Email Address
                </span>
              </div>
              <p className="text-gray-900">{selectedRecruiter.email}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-sm font-medium text-gray-700">
                  Mobile Number
                </span>
              </div>
              <p className="text-gray-900">{selectedRecruiter.mobile}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Briefcase className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-sm font-medium text-gray-700">
                  Position Assigned
                </span>
              </div>
              <p className="text-gray-900">
                {selectedRecruiter.positionAssigned}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Users className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-sm font-medium text-gray-700">
                  SPOC to Clients
                </span>
              </div>
              <p className="text-gray-900">{selectedRecruiter.spocToClients}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
              <div className="flex items-center mb-2">
                <Building className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-sm font-medium text-gray-700">
                  Clients Recruiting For
                </span>
              </div>
              <p className="text-gray-900">
                {selectedRecruiter.clientsRecruitingFor}
              </p>
            </div>
          </div>
        </div>

        {/* Submitted Candidates Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-gray-500 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">
                Submitted Candidates (
                {selectedRecruiter.submittedCandidates.length})
              </h3>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Candidate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resume
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notice Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current CTC
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CTC Budget
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    History
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedRecruiter.submittedCandidates.map(
                  (candidate, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <User className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {candidate.candidate}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                          {candidate.position}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Building className="h-4 w-4 mr-2 text-gray-400" />
                          {candidate.client}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            candidate.status
                          )}`}
                        >
                          {candidate.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="flex items-center text-sm text-indigo-600 hover:text-indigo-900 transition-colors duration-150">
                          <Download className="h-4 w-4 mr-2" />
                          {candidate.resume}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          {candidate.noticePeriod}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
                          {candidate.currentCTC}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
                          {candidate.ctcBudget}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                          <div className="max-w-xs">
                            <div className="truncate" title={candidate.history}>
                              {candidate.history}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the appropriate view
  return currentView === "list" ? <ListView /> : <DetailView />;
};

export default RecruiterDashboard;
