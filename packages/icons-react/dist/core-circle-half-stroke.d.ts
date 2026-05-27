import React from 'react';

export interface CoreCircleHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleHalfStroke: React.FC<CoreCircleHalfStrokeProps>;
export default CoreCircleHalfStroke;
