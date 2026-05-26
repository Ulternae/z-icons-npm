import React from 'react';

export interface LanPercentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPercentThin: React.FC<LanPercentThinProps>;
export default LanPercentThin;
