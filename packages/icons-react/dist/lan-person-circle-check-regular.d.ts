import React from 'react';

export interface LanPersonCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleCheckRegular: React.FC<LanPersonCircleCheckRegularProps>;
export default LanPersonCircleCheckRegular;
