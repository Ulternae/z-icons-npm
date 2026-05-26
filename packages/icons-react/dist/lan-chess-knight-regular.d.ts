import React from 'react';

export interface LanChessKnightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKnightRegular: React.FC<LanChessKnightRegularProps>;
export default LanChessKnightRegular;
