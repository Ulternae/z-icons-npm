import React from 'react';

export const LanTableColumnsAddAfterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M454.5 32.3c30.1 3.1 54.1 27 57.1 57.1l.3 6.5h-16c0-26.5-21.5-48-48-48h-152v416h152c24.9 0 45.3-18.9 47.8-43.1l.2-4.9h16l-.3 6.5c-3.2 32.4-30.5 57.6-63.6 57.6H128c-35.3 0-64-28.7-64-64V96l.3-6.5C67.6 57.2 94.9 32 128 32h320zM128 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h152V48zm352 120c4.4 0 8 3.6 8 8v72h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8h72v-72c0-4.4 3.6-8 8-8"})
);

export default LanTableColumnsAddAfterThin;
