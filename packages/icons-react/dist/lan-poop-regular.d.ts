import React from 'react';

export interface LanPoopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoopRegular: React.FC<LanPoopRegularProps>;
export default LanPoopRegular;
