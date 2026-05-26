import React from 'react';

export interface LanVialCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialCircleCheckRegular: React.FC<LanVialCircleCheckRegularProps>;
export default LanVialCircleCheckRegular;
