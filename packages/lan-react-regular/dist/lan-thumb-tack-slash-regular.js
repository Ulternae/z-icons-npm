import React from 'react';

export function LanThumbTackSlashRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L417.8 352h23.9c21.2 0 38.3-17.2 38.3-38.3 0-29.2-12.5-57-28.5-79.5-13.4-18.9-30.2-35.5-47.5-48L393.8 48h-48.2l10.5 141.8 1.7 22.3 18.2 13.1c16.1 11.6 29.3 26.3 40.4 42.8 6.9 10.8 13 23.3 14.7 36.1h-61.3L222.2 156.5l8-108.4h-48.1l-4.7 63.6L40.9-24.8zM181.8 48H424c13.3 0 24-10.7 24-24S437.3 0 424 0H152c-5.1 0-9.9 1.6-13.8 4.4zm100.4 304-48-48h-89.3c2.5-15.3 9.9-29.5 18.8-42.1 3.9-5.4 8.2-10.7 12.8-15.7l-34-34c-6.4 6.9-12.5 14.2-18 21.9-15.9 22.5-28.5 50.3-28.5 79.5 0 21.2 17.2 38.3 38.3 38.3h147.8zM264 520c0 13.3 10.7 24 24 24s24-10.7 24-24V400h-48z"})
  );
}

export default LanThumbTackSlashRegular;
