import React from 'react';

export interface LanNfcSymbolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSymbolRegular(props: LanNfcSymbolRegularProps): React.ReactElement;
export default LanNfcSymbolRegular;
