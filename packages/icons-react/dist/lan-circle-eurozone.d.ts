import React from 'react';

export interface LanCircleEurozoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEurozone: React.FC<LanCircleEurozoneProps>;
export default LanCircleEurozone;
