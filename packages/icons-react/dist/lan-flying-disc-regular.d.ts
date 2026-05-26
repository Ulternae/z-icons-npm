import React from 'react';

export interface LanFlyingDiscRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlyingDiscRegular: React.FC<LanFlyingDiscRegularProps>;
export default LanFlyingDiscRegular;
