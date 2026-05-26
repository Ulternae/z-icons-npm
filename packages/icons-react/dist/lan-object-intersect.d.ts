import React from 'react';

export interface LanObjectIntersectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectIntersect: React.FC<LanObjectIntersectProps>;
export default LanObjectIntersect;
