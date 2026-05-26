import React from 'react';

export interface LanBinBottlesRecycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinBottlesRecycleThin: React.FC<LanBinBottlesRecycleThinProps>;
export default LanBinBottlesRecycleThin;
