import React from 'react';

export interface LanEggThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggThin: React.FC<LanEggThinProps>;
export default LanEggThin;
