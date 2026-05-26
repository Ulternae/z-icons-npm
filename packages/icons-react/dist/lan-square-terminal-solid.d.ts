import React from 'react';

export interface LanSquareTerminalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTerminalSolid: React.FC<LanSquareTerminalSolidProps>;
export default LanSquareTerminalSolid;
