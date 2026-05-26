import React from 'react';

export interface LanObjectIntersectThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectIntersectThin: React.FC<LanObjectIntersectThinProps>;
export default LanObjectIntersectThin;
