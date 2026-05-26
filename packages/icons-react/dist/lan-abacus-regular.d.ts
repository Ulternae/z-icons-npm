import React from 'react';

export interface LanAbacusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAbacusRegular: React.FC<LanAbacusRegularProps>;
export default LanAbacusRegular;
