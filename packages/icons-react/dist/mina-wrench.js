import React from 'react';

export const MinaWrench = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9.917 7.076a.947.947 0 0 1 0 1.326L8.402 9.917a.947.947 0 0 1-1.326 0L4.528 7.37c-.495-.494-1.327-.333-1.446.356a5.682 5.682 0 0 0 6.626 6.554c.82-.15 1.707-.022 2.296.566l5.566 5.567a2.01 2.01 0 1 0 2.842-2.842l-5.567-5.566c-.588-.589-.716-1.477-.566-2.296a5.684 5.684 0 0 0-6.554-6.626c-.689.12-.85.951-.356 1.446z"})
);

export default MinaWrench;
