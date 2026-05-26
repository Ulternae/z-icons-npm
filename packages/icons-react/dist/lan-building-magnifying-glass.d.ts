import React from 'react';

export interface LanBuildingMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingMagnifyingGlass: React.FC<LanBuildingMagnifyingGlassProps>;
export default LanBuildingMagnifyingGlass;
