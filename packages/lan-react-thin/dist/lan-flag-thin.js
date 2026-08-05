import React from 'react';

export function LanFlagThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8v496c0 4.4 3.6 8 8 8s8-3.6 8-8V396l112.3-28.1c41.1-10.3 84.6-5.5 122.5 13.4 44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30v-291c0-17.8-18.8-29.4-34.7-21.5L393.6 43c-46.3 23.2-100.8 23.2-147.1 0-35.1-17.6-75.4-22-113.5-12.5L16 60zm0 68.5 120.8-30.2c34.4-8.6 70.7-4.6 102.4 11.2 50.8 25.4 110.6 25.4 161.5 0l19.7-9.8c5.3-2.7 11.6 1.2 11.6 7.2v291c0 6.7-4.1 12.6-10.4 15l-34.7 13c-42.1 15.8-88.8 13.3-129-6.8-41.3-20.7-88.7-25.9-133.5-14.7L16 379.5z"})
  );
}

export default LanFlagThin;
