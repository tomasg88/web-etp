import React, { useCallback, useEffect, useState } from 'react'
import { getDownloads } from '..';

const useDownloadsPage = () => {
    // mapear click de botones con el slide y detener el carrousel
  // mapear flechas izquierda y derecha para pasar de slide
  const [activeResource, setActiveResource] = useState<string>();
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    getDownloads().then((downloads) => setDownloads(downloads));
  }, [])

  const handleClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      if (!(event.target instanceof HTMLButtonElement)) {
        return;
      }
      setActiveResource(event.target.dataset['id']);
    },
    [setActiveResource]
  );

  return {
    activeResource,
    setActiveResource,
    downloads,
    handleClick,
  }
}

export default useDownloadsPage