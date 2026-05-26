import React from 'react';

export interface LanMosquitoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosquitoRegular: React.FC<LanMosquitoRegularProps>;
export default LanMosquitoRegular;
