import React from 'react';

export interface LanInfoSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfoSquareRegular: React.FC<LanInfoSquareRegularProps>;
export default LanInfoSquareRegular;
