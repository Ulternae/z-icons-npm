import React from 'react';

export interface LanTrafficLightSlowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightSlow: React.FC<LanTrafficLightSlowProps>;
export default LanTrafficLightSlow;
