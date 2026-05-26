import React from 'react';

export interface LanSquareEurozoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEurozone: React.FC<LanSquareEurozoneProps>;
export default LanSquareEurozone;
