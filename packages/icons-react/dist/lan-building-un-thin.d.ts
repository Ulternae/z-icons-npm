import React from 'react';

export interface LanBuildingUnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingUnThin: React.FC<LanBuildingUnThinProps>;
export default LanBuildingUnThin;
