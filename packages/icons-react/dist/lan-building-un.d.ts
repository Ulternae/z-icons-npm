import React from 'react';

export interface LanBuildingUnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingUn: React.FC<LanBuildingUnProps>;
export default LanBuildingUn;
