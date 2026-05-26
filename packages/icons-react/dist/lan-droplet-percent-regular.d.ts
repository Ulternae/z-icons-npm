import React from 'react';

export interface LanDropletPercentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletPercentRegular: React.FC<LanDropletPercentRegularProps>;
export default LanDropletPercentRegular;
