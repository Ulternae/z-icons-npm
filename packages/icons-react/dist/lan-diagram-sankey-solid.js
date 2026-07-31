import React from 'react';

export const LanDiagramSankeySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M299.5 71.4c5.8-4.8 13-7.4 20.5-7.4h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H331.6l-87.1 72.6c-5.8 4.8-13 7.4-20.5 7.4H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h180.4zM144 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224l48 64h240c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-10.1 0-19.6-4.7-25.6-12.8z"})
);

export default LanDiagramSankeySolid;
