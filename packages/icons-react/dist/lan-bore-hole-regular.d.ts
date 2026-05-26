import React from 'react';

export interface LanBoreHoleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoreHoleRegular: React.FC<LanBoreHoleRegularProps>;
export default LanBoreHoleRegular;
