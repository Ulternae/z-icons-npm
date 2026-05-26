import React from 'react';

export interface LanLightSwitchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightSwitchRegular: React.FC<LanLightSwitchRegularProps>;
export default LanLightSwitchRegular;
