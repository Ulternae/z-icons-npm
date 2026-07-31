import React from 'react';

export const LanPersonRifleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-80 108.1V488c0 13.3 10.7 24 24 24s24-10.7 24-24V244c10.2-2.6 21-4 32-4 23.3 0 45.2 6.2 64 17.1V204c-19.8-7.7-41.4-12-64-12-97.2 0-176 78.8-176 176v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-56c0-40.4 18.7-76.5 48-99.9M384 0c-8.8 0-16 7.2-16 16s7.2 16 16 16v100.3c-9.6 5.5-16 15.9-16 27.7v32h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h32v112c0 8.8 7.2 16 16 16h59.5c10.4 0 18-9.8 15.5-19.9L452 400h44c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-48v-26.7l53.1-17.7c6.5-2.2 10.9-8.3 10.9-15.2v-84.5c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v56l-16 5.3V159.9c0-11.8-6.4-22.2-16-27.7V16c0-8.8-7.2-16-16-16zm16 336h-32v-96h32z"})
);

export default LanPersonRifleRegular;
