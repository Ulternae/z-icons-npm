import React from 'react';

export interface LanDrawSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawSquareRegular: React.FC<LanDrawSquareRegularProps>;
export default LanDrawSquareRegular;
