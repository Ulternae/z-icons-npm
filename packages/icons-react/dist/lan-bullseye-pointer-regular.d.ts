import React from 'react';

export interface LanBullseyePointerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyePointerRegular: React.FC<LanBullseyePointerRegularProps>;
export default LanBullseyePointerRegular;
