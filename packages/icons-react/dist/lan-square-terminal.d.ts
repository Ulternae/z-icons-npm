import React from 'react';

export interface LanSquareTerminalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTerminal: React.FC<LanSquareTerminalProps>;
export default LanSquareTerminal;
