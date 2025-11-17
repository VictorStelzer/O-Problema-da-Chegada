import { Routes, Navigate, Route } from 'react-router-dom';
import { LoginPage } from '../pages/Login';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas de login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Rota curinga */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};