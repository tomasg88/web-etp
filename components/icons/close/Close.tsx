import React from 'react';

export default function CloseIcon({ color = '#9B8054', ...props }) {
  return (
    <svg
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M11.6066 0.292893C11.9971 0.683417 11.9971 1.31658 11.6066 1.70711L7.36415 5.94956L11.607 10.1924C11.9975 10.5829 11.9975 11.2161 11.607 11.6066C11.2165 11.9971 10.5833 11.9971 10.1928 11.6066L5.94994 7.36377L1.70711 11.6066C1.31658 11.9971 0.683417 11.9971 0.292893 11.6066C-0.0976311 11.2161 -0.0976311 10.5829 0.292893 10.1924L4.53573 5.94956L0.293276 1.70711C-0.0972479 1.31658 -0.0972479 0.683417 0.293276 0.292893C0.683801 -0.0976311 1.31697 -0.0976311 1.70749 0.292893L5.94994 4.53534L10.1924 0.292893C10.5829 -0.0976311 11.2161 -0.0976311 11.6066 0.292893Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}