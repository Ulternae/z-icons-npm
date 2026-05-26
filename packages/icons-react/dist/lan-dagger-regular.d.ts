import React from 'react';

export interface LanDaggerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDaggerRegular: React.FC<LanDaggerRegularProps>;
export default LanDaggerRegular;
