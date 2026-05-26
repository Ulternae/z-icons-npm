import React from 'react';

export interface LanBuoyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuoyRegular: React.FC<LanBuoyRegularProps>;
export default LanBuoyRegular;
