import React from 'react';

export interface LanHouseBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseBuilding(props: LanHouseBuildingProps): React.ReactElement;
export default LanHouseBuilding;
