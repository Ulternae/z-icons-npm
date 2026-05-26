import React from 'react';

export interface LanGlobeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeRegular: React.FC<LanGlobeRegularProps>;
export default LanGlobeRegular;
