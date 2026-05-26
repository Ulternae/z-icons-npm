import React from 'react';

export interface LanNfcPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcPenSolid: React.FC<LanNfcPenSolidProps>;
export default LanNfcPenSolid;
