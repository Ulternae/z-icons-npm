import React from 'react';

export interface LanChessQueenAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessQueenAltRegular: React.FC<LanChessQueenAltRegularProps>;
export default LanChessQueenAltRegular;
