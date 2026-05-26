import React from 'react';

export interface LanBowlSoftServeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSoftServeRegular: React.FC<LanBowlSoftServeRegularProps>;
export default LanBowlSoftServeRegular;
