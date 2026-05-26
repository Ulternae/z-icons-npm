import React from 'react';

export interface LanChessKingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKing: React.FC<LanChessKingProps>;
export default LanChessKing;
