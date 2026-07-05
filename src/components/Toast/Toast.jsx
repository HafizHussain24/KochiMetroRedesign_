import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';
import './Toast.css';

// Global state for toasts
let toastIdCounter = 0;
let subscribers = [];

const subscribe = (callback) => {
  subscribers.push(callback);
  return () => { subscribers = subscribers.filter(cb => cb !== callback); };
};

const notify = (toasts) => {
  subscribers.forEach(cb => cb(toasts));
};

let toasts = [];

export const useToast = () => {
  const showToast = (message, type = 'success') => {
    const id = ++toastIdCounter;
    toasts = [...toasts, { id, message, type }];
    notify(toasts);

    setTimeout(() => {
      toasts = toasts.filter(t => t.id !== id);
      notify(toasts);
    }, 4000);
  };

  return { showToast };
};

export function ToastContainer() {
  const [currentToasts, setCurrentToasts] = useState([]);

  useEffect(() => {
    return subscribe(setCurrentToasts);
  }, []);

  const removeToast = (id) => {
    toasts = toasts.filter(t => t.id !== id);
    notify(toasts);
  };

  if (currentToasts.length === 0) return null;

  return (
    <div className="toast-container" role="alert">
      {currentToasts.map(toast => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <div className="toast-icon">
            {toast.type === 'success' && <CheckCircle size={20} />}
            {toast.type === 'warning' && <AlertTriangle size={20} />}
            {toast.type === 'error' && <XCircle size={20} />}
          </div>
          <div className="toast-message">{toast.message}</div>
          <button className="toast-close" onClick={() => removeToast(toast.id)}>
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
