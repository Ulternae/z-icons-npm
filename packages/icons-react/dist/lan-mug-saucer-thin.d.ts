import React from 'react';

export interface LanMugSaucerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugSaucerThin: React.FC<LanMugSaucerThinProps>;
export default LanMugSaucerThin;
