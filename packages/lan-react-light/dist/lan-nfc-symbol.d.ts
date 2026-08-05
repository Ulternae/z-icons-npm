import React from 'react';

export interface LanNfcSymbolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSymbol(props: LanNfcSymbolProps): React.ReactElement;
export default LanNfcSymbol;
