import React from 'react';

export interface LanObjectIntersectSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectIntersectSolid: React.FC<LanObjectIntersectSolidProps>;
export default LanObjectIntersectSolid;
