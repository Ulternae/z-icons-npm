import React from 'react';

export interface LanTarpDropletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTarpDropletRegular: React.FC<LanTarpDropletRegularProps>;
export default LanTarpDropletRegular;
