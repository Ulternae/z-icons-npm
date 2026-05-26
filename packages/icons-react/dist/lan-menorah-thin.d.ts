import React from 'react';

export interface LanMenorahThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMenorahThin: React.FC<LanMenorahThinProps>;
export default LanMenorahThin;
