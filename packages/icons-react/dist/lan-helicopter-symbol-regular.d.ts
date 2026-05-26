import React from 'react';

export interface LanHelicopterSymbolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelicopterSymbolRegular: React.FC<LanHelicopterSymbolRegularProps>;
export default LanHelicopterSymbolRegular;
