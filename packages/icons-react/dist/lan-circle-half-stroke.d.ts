import React from 'react';

export interface LanCircleHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfStroke: React.FC<LanCircleHalfStrokeProps>;
export default LanCircleHalfStroke;
