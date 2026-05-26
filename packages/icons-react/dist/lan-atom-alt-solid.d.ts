import React from 'react';

export interface LanAtomAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAtomAltSolid: React.FC<LanAtomAltSolidProps>;
export default LanAtomAltSolid;
