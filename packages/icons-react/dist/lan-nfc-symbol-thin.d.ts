import React from 'react';

export interface LanNfcSymbolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSymbolThin: React.FC<LanNfcSymbolThinProps>;
export default LanNfcSymbolThin;
