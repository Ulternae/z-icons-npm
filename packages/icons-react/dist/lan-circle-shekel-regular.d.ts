import React from 'react';

export interface LanCircleShekelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleShekelRegular: React.FC<LanCircleShekelRegularProps>;
export default LanCircleShekelRegular;
