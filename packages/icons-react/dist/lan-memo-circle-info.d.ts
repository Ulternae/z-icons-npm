import React from 'react';

export interface LanMemoCircleInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoCircleInfo: React.FC<LanMemoCircleInfoProps>;
export default LanMemoCircleInfo;
