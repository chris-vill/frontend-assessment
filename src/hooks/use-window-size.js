// Libraries
import { useLayoutEffect, useState } from 'react';
import { getViewportWidth } from '@core/utilities';

export default function useWindowSize() {
  const [ size, setSize ] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(getViewportWidth());
    }

    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}