import React from 'react';

export interface LanBowArrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowArrowRegular: React.FC<LanBowArrowRegularProps>;
export default LanBowArrowRegular;
