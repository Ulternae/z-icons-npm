import React from 'react';

export interface LanSquare7ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare7Thin: React.FC<LanSquare7ThinProps>;
export default LanSquare7Thin;
