// components/DocumentModal.jsx
import ReactDOM from 'react-dom';

export default function DocumentModal({ show, onClose, children }) {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white rounded-lg shadow-2xl max-w-md w-full relative z-[10000]">

        {children}
      </div>
    </div>,
    document.body // Render directly into the body to avoid parent stacking
  );
}
