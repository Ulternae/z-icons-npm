import React from 'react';

export interface LanCarBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBuilding: React.FC<LanCarBuildingProps>;
export default LanCarBuilding;
