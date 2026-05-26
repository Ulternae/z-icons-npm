import React from 'react';

export interface LanBoxHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxHeartThin: React.FC<LanBoxHeartThinProps>;
export default LanBoxHeartThin;
