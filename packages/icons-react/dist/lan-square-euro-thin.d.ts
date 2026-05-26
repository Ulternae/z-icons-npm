import React from 'react';

export interface LanSquareEuroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEuroThin: React.FC<LanSquareEuroThinProps>;
export default LanSquareEuroThin;
