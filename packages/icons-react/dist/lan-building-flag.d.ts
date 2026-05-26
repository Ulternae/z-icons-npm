import React from 'react';

export interface LanBuildingFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingFlag: React.FC<LanBuildingFlagProps>;
export default LanBuildingFlag;
