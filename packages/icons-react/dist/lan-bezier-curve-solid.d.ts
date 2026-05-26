import React from 'react';

export interface LanBezierCurveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBezierCurveSolid: React.FC<LanBezierCurveSolidProps>;
export default LanBezierCurveSolid;
