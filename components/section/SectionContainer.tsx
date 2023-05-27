import React from 'react';

interface SectionContainerProps {
  backgroundClassNames?: string;
  children: React.ReactNode;
  className: string;
  style?: React.CSSProperties;
}

export const SectionContainer = ({
  backgroundClassNames = 'bg-salmon-300',
  children,
  className = '',
  style = {},
}: SectionContainerProps) => {
  return (
    <section className={backgroundClassNames}>
      <div
        className={`w-full 2xl:max-w-7xl mx-auto ${className}`}
        style={style}
      >
        {children}
      </div>
    </section>
  );
};
