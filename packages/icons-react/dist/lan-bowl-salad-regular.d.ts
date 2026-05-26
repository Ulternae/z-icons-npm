import React from 'react';

export interface LanBowlSaladRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSaladRegular: React.FC<LanBowlSaladRegularProps>;
export default LanBowlSaladRegular;
