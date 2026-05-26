import React from 'react';

export interface LanDropletPercentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletPercentThin: React.FC<LanDropletPercentThinProps>;
export default LanDropletPercentThin;
