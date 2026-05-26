import React from 'react';

export interface LanDropletPercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletPercent: React.FC<LanDropletPercentProps>;
export default LanDropletPercent;
