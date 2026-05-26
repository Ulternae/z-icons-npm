import React from 'react';

export interface LanDropletPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDropletPlusRegular: React.FC<LanDropletPlusRegularProps>;
export default LanDropletPlusRegular;
