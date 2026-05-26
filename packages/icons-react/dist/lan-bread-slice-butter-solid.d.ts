import React from 'react';

export interface LanBreadSliceButterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadSliceButterSolid: React.FC<LanBreadSliceButterSolidProps>;
export default LanBreadSliceButterSolid;
