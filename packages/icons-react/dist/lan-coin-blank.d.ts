import React from 'react';

export interface LanCoinBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinBlank: React.FC<LanCoinBlankProps>;
export default LanCoinBlank;
