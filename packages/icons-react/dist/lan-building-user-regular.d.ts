import React from 'react';

export interface LanBuildingUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingUserRegular: React.FC<LanBuildingUserRegularProps>;
export default LanBuildingUserRegular;
