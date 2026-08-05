import React from 'react';

export interface LanCarBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBuilding(props: LanCarBuildingProps): React.ReactElement;
export default LanCarBuilding;
