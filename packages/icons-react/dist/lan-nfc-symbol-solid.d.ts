import React from 'react';

export interface LanNfcSymbolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSymbolSolid: React.FC<LanNfcSymbolSolidProps>;
export default LanNfcSymbolSolid;
