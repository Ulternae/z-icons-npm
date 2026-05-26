import React from 'react';

export interface LanAtomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtomSolid: React.FC<LanAtomSolidProps>;
export default LanAtomSolid;
