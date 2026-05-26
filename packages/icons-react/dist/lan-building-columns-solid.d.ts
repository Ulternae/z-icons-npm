import React from 'react';

export interface LanBuildingColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingColumnsSolid: React.FC<LanBuildingColumnsSolidProps>;
export default LanBuildingColumnsSolid;
