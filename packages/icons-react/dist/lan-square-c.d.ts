import React from 'react';

export interface LanSquareCProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareC: React.FC<LanSquareCProps>;
export default LanSquareC;
