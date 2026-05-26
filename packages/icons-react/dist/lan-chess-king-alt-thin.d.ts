import React from 'react';

export interface LanChessKingAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKingAltThin: React.FC<LanChessKingAltThinProps>;
export default LanChessKingAltThin;
