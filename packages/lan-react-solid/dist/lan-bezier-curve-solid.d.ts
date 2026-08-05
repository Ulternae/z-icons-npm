import React from 'react';

export interface LanBezierCurveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBezierCurveSolid(props: LanBezierCurveSolidProps): React.ReactElement;
export default LanBezierCurveSolid;
