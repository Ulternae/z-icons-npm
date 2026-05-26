import React from 'react';

export interface LanLightSwitchOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightSwitchOff: React.FC<LanLightSwitchOffProps>;
export default LanLightSwitchOff;
