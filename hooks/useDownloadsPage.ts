import { ImageUrlParams } from '@sanity/types';
import { useCallback, useEffect, useState } from 'react';

export type FreeResource = {
  _id: string;
  cover: ImageUrlParams;
  name: string;
  description: string;
  ctaButton: string;
  link: string;
};

export const useDownloadsPage = ({
  downloads,
}: {
  downloads: FreeResource[];
}) => {
  const [activeDownload, setActiveDownload] = useState<FreeResource>(
    downloads[0],
  );

  useEffect(() => {
    if (downloads.length) setActiveDownload(downloads[0]);
  }, [downloads, setActiveDownload]);

  const handleClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      if (!(event.target instanceof HTMLButtonElement)) {
        return;
      }
      const dataId = event.target.dataset['id'];
      if (!dataId) return;

      const selected = downloads.find((value) => value._id === dataId);
      if (!selected) return;

      setActiveDownload(selected);
    },
    [downloads, setActiveDownload],
  );

  return { activeDownload, handleClick };
};
