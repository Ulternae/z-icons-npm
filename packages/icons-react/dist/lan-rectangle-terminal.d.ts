import React from 'react';

export interface LanRectangleTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleTerminal: React.FC<LanRectangleTerminalProps>;
export default LanRectangleTerminal;
