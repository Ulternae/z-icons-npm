import React from 'react';

export interface LanCoinBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinBlankSolid: React.FC<LanCoinBlankSolidProps>;
export default LanCoinBlankSolid;
