import React from 'react';

export interface LanListAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListAltSolid: React.FC<LanListAltSolidProps>;
export default LanListAltSolid;
