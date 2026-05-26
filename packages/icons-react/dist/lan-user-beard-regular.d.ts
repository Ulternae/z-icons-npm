import React from 'react';

export interface LanUserBeardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserBeardRegular: React.FC<LanUserBeardRegularProps>;
export default LanUserBeardRegular;
