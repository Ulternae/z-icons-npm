import React from 'react';

export interface LanCauldronThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCauldronThin: React.FC<LanCauldronThinProps>;
export default LanCauldronThin;
