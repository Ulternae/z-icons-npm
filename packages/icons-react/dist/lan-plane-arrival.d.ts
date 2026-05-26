import React from 'react';

export interface LanPlaneArrivalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneArrival: React.FC<LanPlaneArrivalProps>;
export default LanPlaneArrival;
