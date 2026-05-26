import React from 'react';

export interface LanTrafficLightStopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightStopThin: React.FC<LanTrafficLightStopThinProps>;
export default LanTrafficLightStopThin;
