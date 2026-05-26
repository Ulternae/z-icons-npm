import React from 'react';

export interface LanSpellCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpellCheckThin: React.FC<LanSpellCheckThinProps>;
export default LanSpellCheckThin;
