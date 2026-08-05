import React from 'react';

export interface LanNfcSymbolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSymbolThin(props: LanNfcSymbolThinProps): React.ReactElement;
export default LanNfcSymbolThin;
