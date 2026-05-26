import React from 'react';

export interface LanChemexSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChemexSolid: React.FC<LanChemexSolidProps>;
export default LanChemexSolid;
