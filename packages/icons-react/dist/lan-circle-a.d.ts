import React from 'react';

export interface LanCircleAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleA: React.FC<LanCircleAProps>;
export default LanCircleA;
