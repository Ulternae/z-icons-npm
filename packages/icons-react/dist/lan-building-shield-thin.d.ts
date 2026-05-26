import React from 'react';

export interface LanBuildingShieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingShieldThin: React.FC<LanBuildingShieldThinProps>;
export default LanBuildingShieldThin;
