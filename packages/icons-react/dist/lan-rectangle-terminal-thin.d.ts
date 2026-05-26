import React from 'react';

export interface LanRectangleTerminalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleTerminalThin: React.FC<LanRectangleTerminalThinProps>;
export default LanRectangleTerminalThin;
