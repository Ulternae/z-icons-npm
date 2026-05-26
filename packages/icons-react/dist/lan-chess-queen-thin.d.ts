import React from 'react';

export interface LanChessQueenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessQueenThin: React.FC<LanChessQueenThinProps>;
export default LanChessQueenThin;
