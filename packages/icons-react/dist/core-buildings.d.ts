import React from 'react';

export interface CoreBuildingsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBuildings: React.FC<CoreBuildingsProps>;
export default CoreBuildings;
