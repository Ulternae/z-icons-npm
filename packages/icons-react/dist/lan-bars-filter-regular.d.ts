import React from 'react';

export interface LanBarsFilterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsFilterRegular: React.FC<LanBarsFilterRegularProps>;
export default LanBarsFilterRegular;
