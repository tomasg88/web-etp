import { useCallback, useEffect, useState } from "react";
import { getDownloads } from "../pages/downloads";

export const useDownloadsPage = () => {
  const [activeResource, setActiveResource] = useState<string>();
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    getDownloads().then((downloads) => setDownloads(downloads));
  }, []);

  const handleClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      if (!(event.target instanceof HTMLButtonElement)) {
        return;
      }
      setActiveResource(event.target.dataset['id']);
    },
    [setActiveResource]
  );

  return { activeResource, downloads, handleClick }
}