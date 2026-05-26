import React from 'react';

export interface LanPlugCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleCheckRegular: React.FC<LanPlugCircleCheckRegularProps>;
export default LanPlugCircleCheckRegular;
