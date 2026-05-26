import React from 'react';

export interface LanPlaneCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneCircleCheckRegular: React.FC<LanPlaneCircleCheckRegularProps>;
export default LanPlaneCircleCheckRegular;
