import React from 'react';

export interface LanMarsAndVenusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsAndVenusRegular: React.FC<LanMarsAndVenusRegularProps>;
export default LanMarsAndVenusRegular;
