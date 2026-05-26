import React from 'react';

export interface LanBowArcheryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowArcheryRegular: React.FC<LanBowArcheryRegularProps>;
export default LanBowArcheryRegular;
