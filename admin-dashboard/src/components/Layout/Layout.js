import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AnimatePresence mode="wait">
        <motion.div
          key="layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="layout-container"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
