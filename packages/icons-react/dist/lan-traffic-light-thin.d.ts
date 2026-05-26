import React from 'react';

export interface LanTrafficLightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightThin: React.FC<LanTrafficLightThinProps>;
export default LanTrafficLightThin;
