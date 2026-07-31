import React from 'react';

export const CoreBug = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -17.8 448 529.8',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m378.6 17.8-41 61.5c13.8 13.9 25.1 30.4 33.1 48.7H448v64h-64v64h64v64h-64v32c0 11-1.1 21.7-3.2 32H448v64h-96c-29.2 38.9-75.7 64-128 64s-98.8-25.1-128-64H0v-64h67.2c-1.6-7.7-2.6-15.7-3-23.8L64 352v-32H0v-64h64v-64H0v-64h77.3c8-18.3 19.2-34.7 33.1-48.7l-41-61.6 53.2-35.5 41 61.5c18.7-7.5 39-11.7 60.4-11.7s41.7 4.2 60.3 11.8l41.1-61.5zM128 352c0 53 43 96 96 96s96-43 96-96V224H128zm96-256c-41.8 0-77.2 26.7-90.4 64h180.9c-13.2-37.3-48.7-64-90.4-64z"})
);

export default CoreBug;
