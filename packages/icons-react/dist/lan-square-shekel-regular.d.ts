import React from 'react';

export interface LanSquareShekelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareShekelRegular: React.FC<LanSquareShekelRegularProps>;
export default LanSquareShekelRegular;
