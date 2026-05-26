import React from 'react';

export interface LanBinBottlesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinBottlesSolid: React.FC<LanBinBottlesSolidProps>;
export default LanBinBottlesSolid;
