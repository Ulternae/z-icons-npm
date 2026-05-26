import React from 'react';

export interface LanChessQueenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessQueenSolid: React.FC<LanChessQueenSolidProps>;
export default LanChessQueenSolid;
