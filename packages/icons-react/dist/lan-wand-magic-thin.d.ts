import React from 'react';

export interface LanWandMagicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandMagicThin: React.FC<LanWandMagicThinProps>;
export default LanWandMagicThin;
