import React from 'react';

export interface LanHelicopterSymbolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelicopterSymbolThin: React.FC<LanHelicopterSymbolThinProps>;
export default LanHelicopterSymbolThin;
