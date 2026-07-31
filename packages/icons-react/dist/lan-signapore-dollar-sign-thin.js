import React from 'react';

export const LanSignaporeDollarSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M408 0c-4.4 0-8 3.6-8 8v56h-30c-54.1 0-98 43.9-98 98 0 48.8 35.8 90.1 84.1 97l69.5 9.9C466 274.7 496 309.3 496 350c0 45.3-36.7 82-82 82H296c-4.4 0-8 3.6-8 8s3.6 8 8 8h104v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56c53.2-1 96-44.5 96-97.9 0-48.8-35.8-90.1-84.1-97l-69.5-9.9c-40.4-5.8-70.4-40.4-70.4-81.1 0-45.3 36.7-82 82-82h102c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-56c0-4.4-3.6-8-8-8zM98 64c-54.1 0-98 43.9-98 98 0 48.8 35.8 90.1 84.1 97l69.5 9.9C194 274.7 224 309.3 224 350c0 45.3-36.7 82-82 82H24c-4.4 0-8 3.6-8 8s3.6 8 8 8h118c54.1 0 98-43.9 98-98 0-48.8-35.9-90.1-84.1-97l-69.5-9.9C46 237.3 16 202.8 16 162c0-45.3 36.7-82 82-82h102c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanSignaporeDollarSignThin;
