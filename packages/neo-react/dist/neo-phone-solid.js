import React from 'react';

export function NeoPhoneSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 560 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M117.3 0C98.4 0 80.2 6.4 65.5 18.2L42 36.9C15.5 58.2 0 90.3 0 124.4V140c0 125.8 40.2 231.4 114.4 305.6S294.2 560 420 560h15.6c34 0 66.2-15.5 87.5-42l18.7-23.4c11.8-14.7 18.2-33 18.2-51.8 0-22-8.7-43.1-24.3-58.6l-50.6-50.6c-35.2-35.2-93.2-44.6-134.9-8.5-33.8 29.3-77.8 74.9-115.6 138.9-30.7-15.4-57.7-34.8-80.7-57.9s-42.5-50-57.9-80.7c64-37.7 109.6-81.7 138.9-115.6 36.1-41.7 26.7-99.7-8.5-134.9l-50.5-50.6C160.3 8.7 139.2 0 117.3 0"})
  );
}

export default NeoPhoneSolid;
