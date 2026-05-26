import React from 'react';

export interface LanTrafficConeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficConeRegular: React.FC<LanTrafficConeRegularProps>;
export default LanTrafficConeRegular;
