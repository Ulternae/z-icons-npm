import React from 'react';

export const LanSlotMachineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M454.5 32.3C486.8 35.6 512 62.9 512 96v320l-.3 6.5C510 439 502 453.6 490.2 464H528c30.9 0 56-25.1 56-56V191.3c-22.7-3.8-40-23.5-40-47.3 0-26.5 21.5-48 48-48s48 21.5 48 48c0 23.8-17.3 43.5-40 47.3V408c0 39.8-32.2 72-72 72H96l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L32 416V96c0-33.1 25.2-60.4 57.5-63.7L96 32h352zM96 48c-24.9 0-45.3 18.9-47.8 43.1L48 96v320c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V96c0-24.9-18.9-45.3-43.1-47.8L448 48zm96 112c2.5 0 4.8 1.2 6.3 3.2s2 4.5 1.4 6.9l-48 176c-1.2 4.3-5.6 6.8-9.8 5.6s-6.8-5.6-5.6-9.8L181.5 176H136c-4.4 0-8-3.6-8-8s3.6-8 8-8zm112 0c2.5 0 4.8 1.2 6.3 3.2s2 4.5 1.4 6.9l-48 176c-1.2 4.3-5.6 6.8-9.8 5.6s-6.8-5.6-5.6-9.8L293.5 176H248c-4.4 0-8-3.6-8-8s3.6-8 8-8zm112 0c2.5 0 4.8 1.2 6.3 3.2s2 4.5 1.4 6.9l-48 176c-1.2 4.3-5.6 6.8-9.8 5.6s-6.8-5.6-5.6-9.8L405.5 176H360c-4.4 0-8-3.6-8-8s3.6-8 8-8zm176-48a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanSlotMachineThin;
