import React from 'react';

export interface LanSquare7Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare7: React.FC<LanSquare7Props>;
export default LanSquare7;
