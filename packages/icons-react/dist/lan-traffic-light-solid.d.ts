import React from 'react';

export interface LanTrafficLightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightSolid: React.FC<LanTrafficLightSolidProps>;
export default LanTrafficLightSolid;
