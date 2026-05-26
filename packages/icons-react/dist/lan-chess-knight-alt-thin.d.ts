import React from 'react';

export interface LanChessKnightAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKnightAltThin: React.FC<LanChessKnightAltThinProps>;
export default LanChessKnightAltThin;
