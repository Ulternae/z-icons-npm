import React from 'react';

export interface LanTrafficLightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLight: React.FC<LanTrafficLightProps>;
export default LanTrafficLight;
