import React from 'react';

export interface LanLightSwitchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightSwitch: React.FC<LanLightSwitchProps>;
export default LanLightSwitch;
