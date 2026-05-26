import React from 'react';

export interface LanImagePortraitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePortraitThin: React.FC<LanImagePortraitThinProps>;
export default LanImagePortraitThin;
