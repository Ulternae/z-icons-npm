import React from 'react';

export interface LanBuildingShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingShield: React.FC<LanBuildingShieldProps>;
export default LanBuildingShield;
