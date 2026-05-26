import React from 'react';

export interface LanMosquitoNetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosquitoNetRegular: React.FC<LanMosquitoNetRegularProps>;
export default LanMosquitoNetRegular;
