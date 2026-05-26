import React from 'react';

export interface LanLightEmergencySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightEmergencySolid: React.FC<LanLightEmergencySolidProps>;
export default LanLightEmergencySolid;
