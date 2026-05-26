import React from 'react';

export interface LanBinRecycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinRecycleRegular: React.FC<LanBinRecycleRegularProps>;
export default LanBinRecycleRegular;
