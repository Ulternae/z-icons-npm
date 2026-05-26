import React from 'react';

export interface LanFileCircleInfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleInfoThin: React.FC<LanFileCircleInfoThinProps>;
export default LanFileCircleInfoThin;
