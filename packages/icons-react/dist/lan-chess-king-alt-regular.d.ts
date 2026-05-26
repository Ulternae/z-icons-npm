import React from 'react';

export interface LanChessKingAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKingAltRegular: React.FC<LanChessKingAltRegularProps>;
export default LanChessKingAltRegular;
