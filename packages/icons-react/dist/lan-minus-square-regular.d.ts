import React from 'react';

export interface LanMinusSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusSquareRegular: React.FC<LanMinusSquareRegularProps>;
export default LanMinusSquareRegular;
