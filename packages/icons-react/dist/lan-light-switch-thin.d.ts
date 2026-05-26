import React from 'react';

export interface LanLightSwitchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightSwitchThin: React.FC<LanLightSwitchThinProps>;
export default LanLightSwitchThin;
