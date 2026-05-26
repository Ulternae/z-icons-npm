import React from 'react';

export interface LanBuildingWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingWheat: React.FC<LanBuildingWheatProps>;
export default LanBuildingWheat;
