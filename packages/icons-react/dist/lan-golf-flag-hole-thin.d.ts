import React from 'react';

export interface LanGolfFlagHoleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfFlagHoleThin: React.FC<LanGolfFlagHoleThinProps>;
export default LanGolfFlagHoleThin;
