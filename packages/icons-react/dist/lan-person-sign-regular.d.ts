import React from 'react';

export interface LanPersonSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSignRegular: React.FC<LanPersonSignRegularProps>;
export default LanPersonSignRegular;
