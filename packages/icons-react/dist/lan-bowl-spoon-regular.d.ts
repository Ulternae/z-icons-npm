import React from 'react';

export interface LanBowlSpoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSpoonRegular: React.FC<LanBowlSpoonRegularProps>;
export default LanBowlSpoonRegular;
