import React from 'react';

export interface LanBottleDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleDroplet: React.FC<LanBottleDropletProps>;
export default LanBottleDroplet;
