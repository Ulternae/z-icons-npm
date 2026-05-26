import React from 'react';

export interface LanHouseBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseBuilding: React.FC<LanHouseBuildingProps>;
export default LanHouseBuilding;
