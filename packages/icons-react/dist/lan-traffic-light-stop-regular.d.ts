import React from 'react';

export interface LanTrafficLightStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightStopRegular: React.FC<LanTrafficLightStopRegularProps>;
export default LanTrafficLightStopRegular;
