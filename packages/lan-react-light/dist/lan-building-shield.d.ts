import React from 'react';

export interface LanBuildingShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingShield(props: LanBuildingShieldProps): React.ReactElement;
export default LanBuildingShield;
