import React from 'react';

export interface LanBullseyeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyeRegular: React.FC<LanBullseyeRegularProps>;
export default LanBullseyeRegular;
