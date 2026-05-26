import React from 'react';

export interface LanHomeHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeHeartThin: React.FC<LanHomeHeartThinProps>;
export default LanHomeHeartThin;
