import React from 'react';

export interface LanPersonDotsFromLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDotsFromLineRegular: React.FC<LanPersonDotsFromLineRegularProps>;
export default LanPersonDotsFromLineRegular;
