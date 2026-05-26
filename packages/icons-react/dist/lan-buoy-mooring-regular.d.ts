import React from 'react';

export interface LanBuoyMooringRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuoyMooringRegular: React.FC<LanBuoyMooringRegularProps>;
export default LanBuoyMooringRegular;
