import React from 'react';

export interface LanBuildingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingThin: React.FC<LanBuildingThinProps>;
export default LanBuildingThin;
