import React from 'react';

export interface LanSquareBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareB: React.FC<LanSquareBProps>;
export default LanSquareB;
