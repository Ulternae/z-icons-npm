import React from 'react';

export interface LanChessKnightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKnightThin: React.FC<LanChessKnightThinProps>;
export default LanChessKnightThin;
