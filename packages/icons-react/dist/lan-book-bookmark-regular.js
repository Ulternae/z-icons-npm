import React from 'react';

export const LanBookBookmarkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 88C0 39.4 39.4 0 88 0h288c39.8 0 72 32.2 72 72v256c0 25-12.7 47-32 59.9V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80zm80 312c-17.7 0-32 14.3-32 32s14.3 32 32 32h288v-64zm-32-41.3c9.8-4.3 20.6-6.7 32-6.7h296c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24h-24v153.4c0 12.5-10.1 22.6-22.6 22.6-6 0-11.8-2.4-16-6.6L272 176l-41.4 41.4c-4.2 4.2-10 6.6-16 6.6-12.5 0-22.6-10.1-22.6-22.6V48H88c-22.1 0-40 17.9-40 40z"})
);

export default LanBookBookmarkRegular;
