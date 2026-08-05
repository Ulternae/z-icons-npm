import React from 'react';

export interface LanNfcSymbolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSymbolSolid(props: LanNfcSymbolSolidProps): React.ReactElement;
export default LanNfcSymbolSolid;
