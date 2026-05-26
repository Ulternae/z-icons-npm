import React from 'react';

export interface LanBezierCurveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBezierCurveRegular: React.FC<LanBezierCurveRegularProps>;
export default LanBezierCurveRegular;
