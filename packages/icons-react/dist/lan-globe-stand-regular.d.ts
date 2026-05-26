import React from 'react';

export interface LanGlobeStandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeStandRegular: React.FC<LanGlobeStandRegularProps>;
export default LanGlobeStandRegular;
