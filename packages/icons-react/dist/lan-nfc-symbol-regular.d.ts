import React from 'react';

export interface LanNfcSymbolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSymbolRegular: React.FC<LanNfcSymbolRegularProps>;
export default LanNfcSymbolRegular;
