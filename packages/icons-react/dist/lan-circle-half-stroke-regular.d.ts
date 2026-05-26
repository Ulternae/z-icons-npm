import React from 'react';

export interface LanCircleHalfStrokeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfStrokeRegular: React.FC<LanCircleHalfStrokeRegularProps>;
export default LanCircleHalfStrokeRegular;
