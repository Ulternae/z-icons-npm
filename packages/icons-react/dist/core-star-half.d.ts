import React from 'react';

export interface CoreStarHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStarHalf: React.FC<CoreStarHalfProps>;
export default CoreStarHalf;
