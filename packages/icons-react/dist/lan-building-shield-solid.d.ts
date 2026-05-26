import React from 'react';

export interface LanBuildingShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingShieldSolid: React.FC<LanBuildingShieldSolidProps>;
export default LanBuildingShieldSolid;
