import React from 'react';

export interface LanBuildingCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingCircleCheck: React.FC<LanBuildingCircleCheckProps>;
export default LanBuildingCircleCheck;
