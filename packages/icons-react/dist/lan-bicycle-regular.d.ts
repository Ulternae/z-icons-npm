import React from 'react';

export interface LanBicycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBicycleRegular: React.FC<LanBicycleRegularProps>;
export default LanBicycleRegular;
