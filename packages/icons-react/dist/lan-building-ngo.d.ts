import React from 'react';

export interface LanBuildingNgoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingNgo: React.FC<LanBuildingNgoProps>;
export default LanBuildingNgo;
