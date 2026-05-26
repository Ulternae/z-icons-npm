import React from 'react';

export interface LanAbacusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAbacus: React.FC<LanAbacusProps>;
export default LanAbacus;
