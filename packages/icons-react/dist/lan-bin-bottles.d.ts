import React from 'react';

export interface LanBinBottlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinBottles: React.FC<LanBinBottlesProps>;
export default LanBinBottles;
