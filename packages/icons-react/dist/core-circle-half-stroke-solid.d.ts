import React from 'react';

export interface CoreCircleHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleHalfStrokeSolid: React.FC<CoreCircleHalfStrokeSolidProps>;
export default CoreCircleHalfStrokeSolid;
