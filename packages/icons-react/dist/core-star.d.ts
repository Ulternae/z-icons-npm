import React from 'react';

export interface CoreStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStar: React.FC<CoreStarProps>;
export default CoreStar;
