import React from 'react';

export const LanFlowerTulipRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224-32c7.3 0 14.2 3.3 18.7 9l52.4 65.5L350.2 18l2.8-1c6.7-2 14-1 20 2.8 6.8 4.4 10.9 12 10.9 20.1v88c0 70.7-57.3 128-128 128h-8v119.2c30.2-31.9 72.1-52.6 118.9-55l9.1-.2h42.5l3 .2c14.9 1.5 26.5 14.1 26.5 29.4l-.2 8.4C443.6 441 377 507.6 293.9 511.8l-8.4.2H162.4l-8.4-.2C71 507.6 4.4 441 .2 357.9l-.2-8.4c0-15.3 11.6-27.9 26.5-29.4l3-.2H72l9.1.2c46.8 2.4 88.8 23 118.9 55V255.9h-8c-70.7 0-128-57.3-128-128v-88l.2-3C65.1 30 69 23.7 75 19.8c6.8-4.4 15.4-5.1 22.8-1.8l55.1 24.5L205.3-23l1.8-2c4.5-4.5 10.6-7 16.9-7M49.5 368c8.8 54.4 56 96 113 96H196c-14.2-55.2-64.3-96-124-96zm326.5 0c-59.6 0-109.8 40.8-124 96h33.5c56.9 0 104.1-41.6 113-96zM178.8 87c-6.8 8.5-18.5 11.4-28.5 6.9l-38.2-17V128c0 44.2 35.8 80 80 80h64c44.2 0 80-35.8 80-80V76.9l-38.2 17c-10 4.4-21.7 1.6-28.5-6.9L224 30.4z"})
);

export default LanFlowerTulipRegular;
