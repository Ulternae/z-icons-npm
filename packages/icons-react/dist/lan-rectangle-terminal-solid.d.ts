import React from 'react';

export interface LanRectangleTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleTerminalSolid: React.FC<LanRectangleTerminalSolidProps>;
export default LanRectangleTerminalSolid;
