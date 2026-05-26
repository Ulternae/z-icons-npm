import React from 'react';

export interface LanTarpDropletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTarpDroplet: React.FC<LanTarpDropletProps>;
export default LanTarpDroplet;
