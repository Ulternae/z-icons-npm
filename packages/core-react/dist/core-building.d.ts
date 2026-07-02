import React from 'react';

export interface CoreBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBuilding(props: CoreBuildingProps): React.ReactElement;
export default CoreBuilding;
