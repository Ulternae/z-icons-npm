import React from 'react';

export interface LanAtomAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtomAltThin: React.FC<LanAtomAltThinProps>;
export default LanAtomAltThin;
