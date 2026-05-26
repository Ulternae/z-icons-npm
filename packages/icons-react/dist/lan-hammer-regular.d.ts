import React from 'react';

export interface LanHammerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerRegular: React.FC<LanHammerRegularProps>;
export default LanHammerRegular;
