import React from 'react';

export interface LanBuildingUnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingUnRegular: React.FC<LanBuildingUnRegularProps>;
export default LanBuildingUnRegular;
