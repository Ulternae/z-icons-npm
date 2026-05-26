import React from 'react';

export interface LanBoreHoleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoreHoleThin: React.FC<LanBoreHoleThinProps>;
export default LanBoreHoleThin;
