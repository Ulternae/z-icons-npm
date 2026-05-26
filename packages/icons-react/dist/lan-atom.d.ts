import React from 'react';

export interface LanAtomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtom: React.FC<LanAtomProps>;
export default LanAtom;
