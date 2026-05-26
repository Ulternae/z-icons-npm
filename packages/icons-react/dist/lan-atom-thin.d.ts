import React from 'react';

export interface LanAtomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtomThin: React.FC<LanAtomThinProps>;
export default LanAtomThin;
