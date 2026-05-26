import React from 'react';

export interface LanNfcSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSolid: React.FC<LanNfcSolidProps>;
export default LanNfcSolid;
