import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import { WardArrivalProvider } from './context/WardArrivalContext';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';

import { Dashboard } from './pages/Dashboard';
import { AttendancePage } from './pages/AttendancePage';
import { CalendarPage } from './pages/CalendarPage';
import { NoticesPage } from './pages/NoticesPage';
import { StudentInfoPage } from './pages/StudentInfoPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { ExaminationPage } from './pages/ExaminationPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <WardArrivalProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/attendance" element={<AttendancePage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/notices" element={<NoticesPage />} />
                <Route path="/student-info" element={<StudentInfoPage />} />
                <Route path="/academics" element={<AcademicsPage />} />
                <Route path="/examination" element={<ExaminationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          </Router>
        </WardArrivalProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
