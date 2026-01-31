import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Category = lazy(() => import('./pages/Category').then(module => ({ default: module.Category })));
const Detail = lazy(() => import('./pages/Detail').then(module => ({ default: module.Detail })));
const Payment = lazy(() => import('./pages/Payment').then(module => ({ default: module.Payment })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })));

// Loading component
const Loading: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg-primary">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-secondary-400 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
