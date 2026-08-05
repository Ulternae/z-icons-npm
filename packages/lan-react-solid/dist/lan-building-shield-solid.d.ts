import React from 'react';

export interface LanBuildingShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingShieldSolid(props: LanBuildingShieldSolidProps): React.ReactElement;
export default LanBuildingShieldSolid;
