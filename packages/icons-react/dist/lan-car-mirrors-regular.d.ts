import React from 'react';

export interface LanCarMirrorsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarMirrorsRegular: React.FC<LanCarMirrorsRegularProps>;
export default LanCarMirrorsRegular;
