import React from 'react';

export interface LanHammerWarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerWarRegular: React.FC<LanHammerWarRegularProps>;
export default LanHammerWarRegular;
