import React from 'react';

export interface LanChessQueenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessQueenRegular: React.FC<LanChessQueenRegularProps>;
export default LanChessQueenRegular;
