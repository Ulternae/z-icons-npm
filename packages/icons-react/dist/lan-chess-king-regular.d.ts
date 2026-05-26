import React from 'react';

export interface LanChessKingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKingRegular: React.FC<LanChessKingRegularProps>;
export default LanChessKingRegular;
