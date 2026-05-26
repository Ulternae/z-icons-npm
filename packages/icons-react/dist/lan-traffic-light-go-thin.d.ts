import React from 'react';

export interface LanTrafficLightGoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightGoThin: React.FC<LanTrafficLightGoThinProps>;
export default LanTrafficLightGoThin;
