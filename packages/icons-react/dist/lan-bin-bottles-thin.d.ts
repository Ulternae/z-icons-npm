import React from 'react';

export interface LanBinBottlesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinBottlesThin: React.FC<LanBinBottlesThinProps>;
export default LanBinBottlesThin;
