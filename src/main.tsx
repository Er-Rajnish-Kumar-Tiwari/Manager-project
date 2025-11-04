import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SubmissionManagementSystem from './Pages/SubmissionManagementSystem.tsx'
import CandidateManagement from './Pages/CandidateManagement.tsx'
import PositionManagement from './Pages/PositionManagement.tsx'
import ClientManagement from './Pages/ClientManagement.tsx'
import WhatsAppMsgTab from './Pages/WhatsAppMsgTab.tsx'
import AiResumeMatcher from './Pages/AiResumeMatcher.tsx'
import Recruiter from './Pages/RecruiterManagementDash.tsx'
import OfferManagement from './Pages/OfferManagement.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<App />} />
        
        {/* {/* Submission Management page with specific URL */}
        <Route path="/submission-management" element={<SubmissionManagementSystem />} />
        <Route path="/candidate-management" element={ <CandidateManagement />} />
        <Route path="/position-management" element={<PositionManagement />} />
        <Route path='/client-management' element={<ClientManagement />} />
        <Route path='/whatsapp-tab' element={<WhatsAppMsgTab />} />
        <Route path='/ai-matcher' element={<AiResumeMatcher/>} />
        <Route path='/recruiter' element={<Recruiter/>} />
        <Route path='/offer' element={<OfferManagement/>} />
      
        
        {/* You can add more routes */}
        <Route path="/dashboard" element={<div>Dashboard Page</div>} />
        <Route path="/candidates" element={<div>Candidates Page</div>} />
        
        {/* 404 page */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)