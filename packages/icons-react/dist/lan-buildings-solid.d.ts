import React from 'react';

export interface LanBuildingsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingsSolid: React.FC<LanBuildingsSolidProps>;
export default LanBuildingsSolid;
