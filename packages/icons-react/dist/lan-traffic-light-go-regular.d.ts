import React from 'react';

export interface LanTrafficLightGoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightGoRegular: React.FC<LanTrafficLightGoRegularProps>;
export default LanTrafficLightGoRegular;
