import React from 'react';

export interface LanFonduePotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFonduePotSolid: React.FC<LanFonduePotSolidProps>;
export default LanFonduePotSolid;
