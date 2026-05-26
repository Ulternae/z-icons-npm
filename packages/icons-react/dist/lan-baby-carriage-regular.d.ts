import React from 'react';

export interface LanBabyCarriageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBabyCarriageRegular: React.FC<LanBabyCarriageRegularProps>;
export default LanBabyCarriageRegular;
