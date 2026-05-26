import React from 'react';

export interface LanPlaneArrivalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneArrivalThin: React.FC<LanPlaneArrivalThinProps>;
export default LanPlaneArrivalThin;
