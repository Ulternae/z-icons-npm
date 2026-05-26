import React from 'react';

export interface LanNfcSymbolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSymbol: React.FC<LanNfcSymbolProps>;
export default LanNfcSymbol;
