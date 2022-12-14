import React from 'react';

interface SectionContainerProps {
  backgroundClassNames?: string;
  children: React.ReactNode;
  className: string;
}

export const SectionContainer = ({
  backgroundClassNames = 'bg-white',
  children,
  className = '',
}: SectionContainerProps) => {
  return (
    <section className={backgroundClassNames}>
      <div className={`w-full 2xl:max-w-7xl ${className}`}>{children}</div>
    </section>
  );
};
