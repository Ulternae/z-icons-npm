import React from 'react';

export interface LanVirgoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirgoThin: React.FC<LanVirgoThinProps>;
export default LanVirgoThin;
