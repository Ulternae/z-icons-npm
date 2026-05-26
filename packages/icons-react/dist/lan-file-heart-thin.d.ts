import React from 'react';

export interface LanFileHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHeartThin: React.FC<LanFileHeartThinProps>;
export default LanFileHeartThin;
