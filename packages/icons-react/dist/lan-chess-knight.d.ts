import React from 'react';

export interface LanChessKnightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKnight: React.FC<LanChessKnightProps>;
export default LanChessKnight;
