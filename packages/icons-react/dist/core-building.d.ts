import React from 'react';

export interface CoreBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBuilding: React.FC<CoreBuildingProps>;
export default CoreBuilding;
