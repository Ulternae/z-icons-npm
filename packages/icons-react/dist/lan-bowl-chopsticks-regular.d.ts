import React from 'react';

export interface LanBowlChopsticksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlChopsticksRegular: React.FC<LanBowlChopsticksRegularProps>;
export default LanBowlChopsticksRegular;
