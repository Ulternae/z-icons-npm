import React from 'react';

export interface LanBinRecycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinRecycle: React.FC<LanBinRecycleProps>;
export default LanBinRecycle;
