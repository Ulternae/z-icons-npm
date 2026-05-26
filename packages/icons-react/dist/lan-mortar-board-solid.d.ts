import React from 'react';

export interface LanMortarBoardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMortarBoardSolid: React.FC<LanMortarBoardSolidProps>;
export default LanMortarBoardSolid;
