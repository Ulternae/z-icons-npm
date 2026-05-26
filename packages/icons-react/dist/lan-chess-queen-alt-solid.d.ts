import React from 'react';

export interface LanChessQueenAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessQueenAltSolid: React.FC<LanChessQueenAltSolidProps>;
export default LanChessQueenAltSolid;
