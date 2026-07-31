import React from 'react';

export const LanLampStreetThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 164C16 82.3 82.3 16 164 16h4c79.5 0 144 64.5 144 144h8c-95.2 0-174.2 69.3-189.4 160.1-2.9 17.4 11.7 31.9 29.4 31.9h81.6c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64H480c17.7 0 32.3-14.4 29.4-31.9C494.2 229.2 415.2 160 320 160h8C328 71.6 256.4 0 168 0h-4C73.4 0 0 73.4 0 164v340c0 4.4 3.6 8 8 8s8-3.6 8-8zm304 12c87.2 0 159.7 63.5 173.6 146.8 1 5.9-3.9 13.2-13.6 13.2H160c-9.7 0-14.6-7.4-13.6-13.2C160.3 239.5 232.8 176 320 176m0 224c-29.8 0-54.9-20.4-62-48h124c-7.1 27.6-32.2 48-62 48"})
);

export default LanLampStreetThin;
