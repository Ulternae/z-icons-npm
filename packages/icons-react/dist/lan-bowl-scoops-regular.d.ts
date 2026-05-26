import React from 'react';

export interface LanBowlScoopsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlScoopsRegular: React.FC<LanBowlScoopsRegularProps>;
export default LanBowlScoopsRegular;
