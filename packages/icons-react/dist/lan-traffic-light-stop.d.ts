import React from 'react';

export interface LanTrafficLightStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightStop: React.FC<LanTrafficLightStopProps>;
export default LanTrafficLightStop;
