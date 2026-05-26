import React from 'react';

export interface LanBinBottlesRecycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinBottlesRecycle: React.FC<LanBinBottlesRecycleProps>;
export default LanBinBottlesRecycle;
