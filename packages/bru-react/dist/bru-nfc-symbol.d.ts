import React from 'react';

export interface BruNfcSymbolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNfcSymbol(props: BruNfcSymbolProps): React.ReactElement;
export default BruNfcSymbol;
