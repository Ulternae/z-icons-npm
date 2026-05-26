import React from 'react';

export interface LanCookieBiteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCookieBiteRegular: React.FC<LanCookieBiteRegularProps>;
export default LanCookieBiteRegular;
