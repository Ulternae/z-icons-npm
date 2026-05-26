import React from 'react';

export interface LanPopcornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPopcornRegular: React.FC<LanPopcornRegularProps>;
export default LanPopcornRegular;
