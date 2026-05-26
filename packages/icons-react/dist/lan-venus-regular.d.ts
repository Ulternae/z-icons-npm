import React from 'react';

export interface LanVenusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusRegular: React.FC<LanVenusRegularProps>;
export default LanVenusRegular;
