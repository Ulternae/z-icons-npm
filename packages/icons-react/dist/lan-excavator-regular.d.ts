import React from 'react';

export interface LanExcavatorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExcavatorRegular: React.FC<LanExcavatorRegularProps>;
export default LanExcavatorRegular;
