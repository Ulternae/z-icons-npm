import React from 'react';

export const LanGrateDropletRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152 32c-30.9 0-56 25.1-56 56v336c0 30.9 25.1 56 56 56h201.1c-5.3-15.1-8.4-31.2-9-48h-.1V280h52.8c17.4-26.7 36.2-50.2 51.2-67.5V80h40c4.4 0 8 3.6 8 8v92.6c16-3.4 32.9-1.6 48 5.3v-98c0-30.9-25.1-56-56-56zm40 48v152h-48V88c0-4.4 3.6-8 8-8zm-48 200h48v152h-40c-4.4 0-8-3.6-8-8zm96 152V280h56v152zM400 80v152h-56V80zm-104 0v152h-56V80zm96 346.1c0 65.1 53.7 117.9 120 117.9s120-52.8 120-117.9c0-68.9-64.1-150.4-98.6-189.3-11.6-13.1-31.3-13.1-42.9 0-34.5 38.9-98.6 120.4-98.6 189.3z"})
);

export default LanGrateDropletRegular;
