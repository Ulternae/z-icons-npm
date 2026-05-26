import React from 'react';

export interface LanChessKingAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKingAlt: React.FC<LanChessKingAltProps>;
export default LanChessKingAlt;
