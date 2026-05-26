import React from 'react';

export interface LanChessQueenAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessQueenAltThin: React.FC<LanChessQueenAltThinProps>;
export default LanChessQueenAltThin;
