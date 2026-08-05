import React from 'react';

export interface LanBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuilding(props: LanBuildingProps): React.ReactElement;
export default LanBuilding;
