import React from 'react';

export interface CoreMoonStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoonStar: React.FC<CoreMoonStarProps>;
export default CoreMoonStar;
