import React from 'react';

export const LanChessClockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M216 32c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64v48h360l6.5.3c32.3 3.3 57.5 30.6 57.5 63.7v224l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-448l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 384V160c0-33.1 25.2-60.4 57.5-63.7L64 96h72V48H72c-4.4 0-8-3.6-8-8s3.6-8 8-8zM64 112c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48zm104 264a104 104 0 1 1 0-208 104 104 0 1 1 0 208m240 0a104 104 0 1 1 0-208 104 104 0 1 1 0 208M168 184a88 88 0 1 0 0 176 88 88 0 1 0 0-176m240 0a88 88 0 1 0 0 176 88 88 0 1 0 0-176m-240 16c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8m291.4 33.1c3.8-2.2 8.7-.9 10.9 2.9s.9 8.7-2.9 10.9l-55.4 32c-3.8 2.2-8.7.9-10.9-2.9s-.9-8.7 2.9-10.9zM488 48c4.4 0 8 3.6 8 8s-3.6 8-8 8H344c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
);

export default LanChessClockThin;
