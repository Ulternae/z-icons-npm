import React from 'react';

export interface LanBezierCurveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBezierCurve(props: LanBezierCurveProps): React.ReactElement;
export default LanBezierCurve;
