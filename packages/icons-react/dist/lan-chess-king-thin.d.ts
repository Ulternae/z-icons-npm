import React from 'react';

export interface LanChessKingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKingThin: React.FC<LanChessKingThinProps>;
export default LanChessKingThin;
