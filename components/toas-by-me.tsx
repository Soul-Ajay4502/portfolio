'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Optional icon
import clsx from 'clsx';

type ToastProps = {
    message: string;
    type?: 'success' | 'error';
    duration?: number; // in ms
};

const Toast: React.FC<ToastProps> = ({ message, type = 'success', duration = 3000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(timer);
    }, [duration]);

    const bgColor = clsx({
        'bg-green-600': type === 'success',
        'bg-red-600': type === 'error',
    });

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed bottom-4 right-4 z-50 text-white px-4 py-3 rounded-lg shadow-lg flex items-center justify-between min-w-[250px] ${bgColor}`}
                >
                    <span>{message}</span>
                    <button
                        onClick={() => setVisible(false)}
                        className="ml-4 text-white hover:opacity-75"
                        aria-label="Close Toast"
                    >
                        <X size={16} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
