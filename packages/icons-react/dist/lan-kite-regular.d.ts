import React from 'react';

export interface LanKiteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKiteRegular: React.FC<LanKiteRegularProps>;
export default LanKiteRegular;
