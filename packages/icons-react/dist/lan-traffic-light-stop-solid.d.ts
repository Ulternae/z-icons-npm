import React from 'react';

export interface LanTrafficLightStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightStopSolid: React.FC<LanTrafficLightStopSolidProps>;
export default LanTrafficLightStopSolid;
