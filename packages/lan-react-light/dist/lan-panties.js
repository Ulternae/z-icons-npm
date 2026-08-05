import React from 'react';

export function LanPanties({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M5.8 123.2c3.7-3 8.6-4.3 13.2-3.3C96.7 135.1 188.9 144 287.9 144s191.2-8.9 268.9-24.1c4.7-.9 9.6.3 13.2 3.3s5.8 7.6 5.8 12.4V192c0 6.5-3.9 12.3-9.8 14.8L522.4 225c-88.7 37-154.7 113.7-178 206.9l-9 36.1c-1.7 7-8.1 12-15.4 12h-64c-7.3 0-13.7-5-15.5-12.1l-9-36.1c-23.3-93.2-89.3-169.9-178-206.9L9.8 206.8C3.9 204.3 0 198.5 0 192v-56.4c0-4.8 2.1-9.3 5.8-12.4M544 154.9C468.3 168.3 380.9 176 288 176s-180.3-7.7-256-21.1v26.5l33.8 14.1c98 40.8 171 125.6 196.7 228.7l6 23.9h39l6-23.9c25.8-103 98.7-187.8 196.7-228.7l33.8-14.1z"})
  );
}

export default LanPanties;
