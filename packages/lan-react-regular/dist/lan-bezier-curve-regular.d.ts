import React from 'react';

export interface LanBezierCurveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBezierCurveRegular(props: LanBezierCurveRegularProps): React.ReactElement;
export default LanBezierCurveRegular;
