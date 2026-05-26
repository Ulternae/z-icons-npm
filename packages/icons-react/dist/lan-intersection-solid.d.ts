import React from 'react';

export interface LanIntersectionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIntersectionSolid: React.FC<LanIntersectionSolidProps>;
export default LanIntersectionSolid;
