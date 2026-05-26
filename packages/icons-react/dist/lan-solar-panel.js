import React from 'react';

export const LanSolarPanel = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M90.6 89.1 67.7 192h129.6l9.6-128h-85.1c-15 0-28 10.4-31.2 25.1M60.6 224l-19.8 89.1C36.4 333 51.6 352 72 352h113.3l9.6-128zm156.8 128h141.5l-9.6-128H227zm173.6 0h113.3c20.5 0 35.7-19 31.2-38.9L515.7 224H381.4zm117.6-160L485.7 89.1C482.5 74.4 469.5 64 454.5 64h-85.1l9.6 128zM337.3 64H239l-9.6 128h117.5zm-278 18.1C65.8 52.8 91.8 32 121.8 32h332.7c30 0 56 20.8 62.5 50.1l49.8 224c8.9 40-21.5 77.9-62.5 77.9H304.2v96h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-224c-8.8 0-16-7.2-16-16s7.2-16 16-16h96v-96H72.1c-41 0-71.4-37.9-62.5-77.9l49.8-224z"})
);

export default LanSolarPanel;
