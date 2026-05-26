import React from 'react';

export interface LanSquareLProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareL: React.FC<LanSquareLProps>;
export default LanSquareL;
