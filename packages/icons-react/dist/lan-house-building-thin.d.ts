import React from 'react';

export interface LanHouseBuildingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseBuildingThin: React.FC<LanHouseBuildingThinProps>;
export default LanHouseBuildingThin;
