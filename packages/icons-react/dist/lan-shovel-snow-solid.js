import React from 'react';

export const LanShovelSnowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.975 640 590.611',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M502.8-22.6c-12.5-12.5-32.8-12.5-45.3 0l-44.1 44.1c-18.7 18.7-29.3 44.1-29.3 70.6 0 15.9 3.7 30.9 10.3 44.3l-113 113-52.7-52.7c-19.8-19.8-52.2-18.5-70.4 2.7L29.1 350.3c-16.3 19-15.2 47.4 2.5 65.2l129.1 129.1c17.7 17.7 46.1 18.8 65.2 2.5l150.9-129.4c21.2-18.2 22.5-50.6 2.7-70.4l-52.7-52.7 113-113c13.4 6.6 28.4 10.3 44.3 10.3 26.5 0 51.9-10.5 70.6-29.3l44.1-44.1c12.5-12.5 12.5-32.8 0-45.3l-96-96zm-44.2 89.3 21.5-21.5 50.7 50.7-21.5 21.5c-6.7 6.7-15.9 10.5-25.4 10.5-19.8 0-35.9-16.1-35.9-35.9 0-9.5 3.8-18.6 10.5-25.4zM225.1 321l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9m64 64-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9"})
);

export default LanShovelSnowSolid;
