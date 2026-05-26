import React from 'react';

export interface LanScytheRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScytheRegular: React.FC<LanScytheRegularProps>;
export default LanScytheRegular;
