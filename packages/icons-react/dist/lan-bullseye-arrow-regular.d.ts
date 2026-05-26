import React from 'react';

export interface LanBullseyeArrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyeArrowRegular: React.FC<LanBullseyeArrowRegularProps>;
export default LanBullseyeArrowRegular;
