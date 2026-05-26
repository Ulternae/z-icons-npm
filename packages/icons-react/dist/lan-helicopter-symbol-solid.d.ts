import React from 'react';

export interface LanHelicopterSymbolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelicopterSymbolSolid: React.FC<LanHelicopterSymbolSolidProps>;
export default LanHelicopterSymbolSolid;
