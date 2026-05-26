import React from 'react';

export interface LanFileCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleCheckRegular: React.FC<LanFileCircleCheckRegularProps>;
export default LanFileCircleCheckRegular;
