import React from 'react';

export interface LanChessKnightAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKnightAltSolid: React.FC<LanChessKnightAltSolidProps>;
export default LanChessKnightAltSolid;
