import React from 'react';

export interface LanChessKnightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKnightSolid: React.FC<LanChessKnightSolidProps>;
export default LanChessKnightSolid;
