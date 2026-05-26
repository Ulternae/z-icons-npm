import React from 'react';

export interface LanObjectIntersectRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectIntersectRegular: React.FC<LanObjectIntersectRegularProps>;
export default LanObjectIntersectRegular;
