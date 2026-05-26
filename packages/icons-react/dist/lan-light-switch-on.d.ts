import React from 'react';

export interface LanLightSwitchOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightSwitchOn: React.FC<LanLightSwitchOnProps>;
export default LanLightSwitchOn;
