import React from 'react';

export interface LanHeartCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCircleCheckRegular: React.FC<LanHeartCircleCheckRegularProps>;
export default LanHeartCircleCheckRegular;
