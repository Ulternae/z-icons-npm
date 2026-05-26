import React from 'react';

export interface LanFileCircleInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleInfo: React.FC<LanFileCircleInfoProps>;
export default LanFileCircleInfo;
