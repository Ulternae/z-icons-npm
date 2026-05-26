import React from 'react';

export interface LanChessKnightAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKnightAltRegular: React.FC<LanChessKnightAltRegularProps>;
export default LanChessKnightAltRegular;
