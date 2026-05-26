import React from 'react';

export interface LanHSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHSquareRegular: React.FC<LanHSquareRegularProps>;
export default LanHSquareRegular;
