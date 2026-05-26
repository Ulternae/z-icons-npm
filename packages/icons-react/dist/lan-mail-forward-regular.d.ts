import React from 'react';

export interface LanMailForwardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMailForwardRegular: React.FC<LanMailForwardRegularProps>;
export default LanMailForwardRegular;
