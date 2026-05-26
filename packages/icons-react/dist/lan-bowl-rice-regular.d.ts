import React from 'react';

export interface LanBowlRiceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlRiceRegular: React.FC<LanBowlRiceRegularProps>;
export default LanBowlRiceRegular;
