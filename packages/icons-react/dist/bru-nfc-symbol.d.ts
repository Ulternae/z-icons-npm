import React from 'react';

export interface BruNfcSymbolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNfcSymbol: React.FC<BruNfcSymbolProps>;
export default BruNfcSymbol;
