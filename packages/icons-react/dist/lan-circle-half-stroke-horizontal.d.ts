import React from 'react';

export interface LanCircleHalfStrokeHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfStrokeHorizontal: React.FC<LanCircleHalfStrokeHorizontalProps>;
export default LanCircleHalfStrokeHorizontal;
