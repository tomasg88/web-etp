import { useCallback, useEffect, useState } from "react";
import { getDownloads } from "../pages/downloads";

export type FreeResource = {
  _id: string,
  name: string,
  description: string,
  ctaButton: string,
  link: string
}

export const useDownloadsPage = () => {
  const [downloads, setDownloads] = useState<FreeResource[]>([]);
  const [activeDownload, setActiveDownload] = useState<FreeResource | undefined>();

  useEffect(() => {
    getDownloads().then((downloads) => setDownloads(downloads));
  }, []);

  useEffect(() => {
    if (downloads.length) setActiveDownload(downloads[0])
  }, [downloads, setActiveDownload])
  

  const handleClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      if (!(event.target instanceof HTMLButtonElement)) {
        return;
      }
      const dataId = event.target.dataset['id'];
      if (!dataId) return;

      const selected = downloads.find((value) => value._id === dataId)
      setActiveDownload(selected);
    },
    [downloads, setActiveDownload]
  );

  return { activeDownload, downloads, handleClick }
}