import React from 'react';

export interface LanTrafficLightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficLightRegular: React.FC<LanTrafficLightRegularProps>;
export default LanTrafficLightRegular;
