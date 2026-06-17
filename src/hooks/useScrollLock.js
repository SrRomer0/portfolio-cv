import { useEffect } from 'react';

/**
 * Custom hook to lock the body scroll when a modal or overlay is open.
 * @param {boolean} isLocked - Whether the scroll should be locked.
 */
export function useScrollLock(isLocked) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLocked]);
}
