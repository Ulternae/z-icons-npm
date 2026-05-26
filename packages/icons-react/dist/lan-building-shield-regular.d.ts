import React from 'react';

export interface LanBuildingShieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingShieldRegular: React.FC<LanBuildingShieldRegularProps>;
export default LanBuildingShieldRegular;
