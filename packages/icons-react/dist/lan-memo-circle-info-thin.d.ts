import React from 'react';

export interface LanMemoCircleInfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoCircleInfoThin: React.FC<LanMemoCircleInfoThinProps>;
export default LanMemoCircleInfoThin;
