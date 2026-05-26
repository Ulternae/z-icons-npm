import React from 'react';

export const LanSignaporeDollarSignSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M392 0c-13.3 0-24 10.7-24 24v40.9c-54.2 7.1-96 53.4-96 109.6 0 53.4 38.2 99.2 90.7 108.7l47.1 8.6c22.1 4 38.2 23.3 38.2 45.7 0 25.7-20.8 46.5-46.5 46.5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40.9c54.2-7.1 96-53.4 96-109.6 0-53.4-38.2-99.2-90.7-108.7l-47.1-8.6c-22.1-4-38.2-23.3-38.2-45.7 0-25.7 20.8-46.5 46.5-46.5H448c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V24c0-13.3-10.7-24-24-24M110.5 64C49.5 64 0 113.5 0 174.5c0 53.4 38.2 99.2 90.7 108.7l47.1 8.6c22.1 4 38.2 23.3 38.2 45.7 0 25.7-20.8 46.5-46.5 46.5H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h81.5c61 0 110.5-49.5 110.5-110.5 0-53.4-38.2-99.2-90.7-108.7l-47.1-8.6C80.1 216.2 64 197 64 174.5c0-25.7 20.8-46.5 46.5-46.5H176c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
);

export default LanSignaporeDollarSignSolid;
