import React from 'react';

export interface LanBuildingCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingCircleXmark: React.FC<LanBuildingCircleXmarkProps>;
export default LanBuildingCircleXmark;
