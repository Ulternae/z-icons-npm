import React from 'react';

export interface LanTrafficLightSlowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightSlowRegular: React.FC<LanTrafficLightSlowRegularProps>;
export default LanTrafficLightSlowRegular;
