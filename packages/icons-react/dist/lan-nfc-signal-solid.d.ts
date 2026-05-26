import React from 'react';

export interface LanNfcSignalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSignalSolid: React.FC<LanNfcSignalSolidProps>;
export default LanNfcSignalSolid;
