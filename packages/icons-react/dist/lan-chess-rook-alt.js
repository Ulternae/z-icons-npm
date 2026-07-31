import React from 'react';

export const LanChessRookAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M291.2 32.3c7.3 1.5 12.8 8 12.8 15.7v133.3c0 10.4-3.4 20.5-9.6 28.8l-26.5 35.3c2.5 2.8 4.1 6.5 4.1 10.6 0 8.8-7.2 16-16 16v96l57.8 86.7c4 6.1 6.2 13.2 6.2 20.4l-.2 3.8c-1.9 18.6-17.6 33.1-36.7 33.1H36.8l-3.8-.2C15.7 510 2 496.3.2 478.9l-.2-3.7c0-5.5 1.2-10.8 3.5-15.7l2.7-4.7L64 368.1v-96c-8.8 0-16-7.2-16-16 0-4.1 1.6-7.8 4.1-10.6l-26.5-35.4c-6.2-8.3-9.6-18.4-9.6-28.8V48l.3-3.2C17.8 37.5 24.3 32 32 32h256zM32.8 472.5c-.5.8-.8 1.7-.8 2.7 0 2.7 2.2 4.8 4.8 4.8h246.3c2.7 0 4.8-2.2 4.8-4.8 0-.5-.1-1-.2-1.4l-.6-1.3-48.3-72.5H81.1zM96 272v96h128v-96zm-48-90.7c0 3.5 1.1 6.8 3.2 9.6L88 240h144l36.8-49.1c2.1-2.8 3.2-6.1 3.2-9.6V64h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V64h-64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V64H48z"})
);

export default LanChessRookAlt;
