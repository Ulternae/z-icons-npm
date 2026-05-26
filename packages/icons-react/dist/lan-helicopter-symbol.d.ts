import React from 'react';

export interface LanHelicopterSymbolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelicopterSymbol: React.FC<LanHelicopterSymbolProps>;
export default LanHelicopterSymbol;
