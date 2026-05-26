import React from 'react';

export interface LanBezierCurveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBezierCurve: React.FC<LanBezierCurveProps>;
export default LanBezierCurve;
