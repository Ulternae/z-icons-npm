import React from 'react';

export interface LanCarBuildingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBuildingThin: React.FC<LanCarBuildingThinProps>;
export default LanCarBuildingThin;
