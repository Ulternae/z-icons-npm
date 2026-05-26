import React from 'react';

export interface LanMemoCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoCircleInfoSolid: React.FC<LanMemoCircleInfoSolidProps>;
export default LanMemoCircleInfoSolid;
