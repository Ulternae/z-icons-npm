import React from 'react';

export function CoreDatabaseSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 416c0 19.5-9.2 41-30 52.5-34.9 19.4-102.3 43.5-194 43.5-86 0-150.6-21.2-187.1-39.8l-6.9-3.7C9.2 457 0 435.5 0 416v-45.9C64.3 394.2 141.7 408 224 408s159.7-13.8 224-37.9zm0-97.7C387.9 343.9 310.2 360 224 360S60.1 343.9 0 318.3V210.1C64.3 234.3 141.7 248 224 248s159.7-13.7 224-37.9zM224 0c91.7 0 159.1 24.1 194 43.5 20.7 11.5 30 33 30 52.5v62.3C387.9 183.9 310.2 200 224 200S60.1 183.9 0 158.3V96c0-19.5 9.2-41 30-52.5l6.9-3.7C73.4 21.2 138 0 224 0"})
  );
}

export default CoreDatabaseSolid;
