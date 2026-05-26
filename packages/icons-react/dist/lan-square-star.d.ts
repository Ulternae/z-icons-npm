import React from 'react';

export interface LanSquareStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareStar: React.FC<LanSquareStarProps>;
export default LanSquareStar;
