import React from 'react';

export interface LanHelicopterSymbolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelicopterSymbol(props: LanHelicopterSymbolProps): React.ReactElement;
export default LanHelicopterSymbol;
