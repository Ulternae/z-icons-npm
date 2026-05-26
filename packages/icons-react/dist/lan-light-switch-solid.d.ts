import React from 'react';

export interface LanLightSwitchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightSwitchSolid: React.FC<LanLightSwitchSolidProps>;
export default LanLightSwitchSolid;
