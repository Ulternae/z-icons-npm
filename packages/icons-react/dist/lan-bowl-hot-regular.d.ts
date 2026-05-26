import React from 'react';

export interface LanBowlHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlHotRegular: React.FC<LanBowlHotRegularProps>;
export default LanBowlHotRegular;
