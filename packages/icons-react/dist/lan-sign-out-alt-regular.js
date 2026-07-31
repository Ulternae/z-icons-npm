import React from 'react';

export const LanSignOutAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112v64H208c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h112v64c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2zm-137-73v-30.1l86.1 86.1-86.1 86.1V312c0-13.3-10.7-24-24-24H208v-64h136c13.3 0 24-10.7 24-24M168 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H96C43 32 0 75 0 128v256c0 53 43 96 96 96h72c13.3 0 24-10.7 24-24s-10.7-24-24-24H96c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48z"})
);

export default LanSignOutAltRegular;
