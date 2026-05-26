import React from 'react';

export interface LanTarpDropletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTarpDropletThin: React.FC<LanTarpDropletThinProps>;
export default LanTarpDropletThin;
