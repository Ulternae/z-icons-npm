import React from 'react';

export interface LanBiohazardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBiohazardThin: React.FC<LanBiohazardThinProps>;
export default LanBiohazardThin;
