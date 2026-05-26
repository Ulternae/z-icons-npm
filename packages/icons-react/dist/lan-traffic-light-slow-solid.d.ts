import React from 'react';

export interface LanTrafficLightSlowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightSlowSolid: React.FC<LanTrafficLightSlowSolidProps>;
export default LanTrafficLightSlowSolid;
