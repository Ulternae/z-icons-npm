import React from 'react';

export interface LanTrafficLightGoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightGoSolid: React.FC<LanTrafficLightGoSolidProps>;
export default LanTrafficLightGoSolid;
