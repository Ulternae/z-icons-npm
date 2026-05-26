import React from 'react';

export interface LanSquare5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare5Thin: React.FC<LanSquare5ThinProps>;
export default LanSquare5Thin;
