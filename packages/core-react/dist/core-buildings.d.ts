import React from 'react';

export interface CoreBuildingsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBuildings(props: CoreBuildingsProps): React.ReactElement;
export default CoreBuildings;
