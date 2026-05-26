import React from 'react';

export interface LanBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuilding: React.FC<LanBuildingProps>;
export default LanBuilding;
