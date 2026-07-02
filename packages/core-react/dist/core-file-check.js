import React from 'react';

export function CoreFileCheck({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M384 128v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-256c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0h192zM64 448h256V154.5L229.5 64H64zm231.6-192-19.8 19.8-96 96c-10.9 10.9-28.7 10.9-39.6 0L80.4 312l39.6-39.6c13.1 13.1 26.5 26.4 40 40l76.2-76.2 19.8-19.8z"})
  );
}

export default CoreFileCheck;
