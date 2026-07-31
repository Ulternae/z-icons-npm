import React from 'react';

export const LanBurgerCheeseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 400c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64zm6-192h404c3.3 0 6-2.7 6-6 0-15.8-2.4-30-8.9-41.9C434.5 122.2 378.8 48 256 48S77.5 122.2 56.9 160.1C50.4 172 48 186.2 48 202c0 3.3 2.7 6 6 6M32 400c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16 0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80m22-176c-12.2 0-22-9.9-22-22 0-17.2 2.6-34.4 10.8-49.5C65 111.7 125.1 32 256 32s191 79.6 213.2 120.5c8.2 15.1 10.8 32.3 10.8 49.5 0 12.2-9.9 22-22 22zM240 96a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-96 16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m208 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0M32 272h192c1.6 0 3.1.5 4.4 1.3l91.6 61 91.6-61c1.3-.9 2.9-1.3 4.4-1.3h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-4.4 0-8-3.6-8-8s3.6-8 8-8h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-61.6l-94 62.7a8.01 8.01 0 0 1-8.9 0L221.6 288H32c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c4.4 0 8 3.6 8 8s-3.6 8-8 8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"})
);

export default LanBurgerCheeseThin;
