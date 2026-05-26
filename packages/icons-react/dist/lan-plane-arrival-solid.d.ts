import React from 'react';

export interface LanPlaneArrivalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneArrivalSolid: React.FC<LanPlaneArrivalSolidProps>;
export default LanPlaneArrivalSolid;
