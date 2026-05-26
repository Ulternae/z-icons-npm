import React from 'react';

export interface LanBuildingsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildings: React.FC<LanBuildingsProps>;
export default LanBuildings;
