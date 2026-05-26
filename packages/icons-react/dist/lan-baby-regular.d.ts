import React from 'react';

export interface LanBabyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBabyRegular: React.FC<LanBabyRegularProps>;
export default LanBabyRegular;
