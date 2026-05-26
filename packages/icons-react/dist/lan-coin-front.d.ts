import React from 'react';

export interface LanCoinFrontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinFront: React.FC<LanCoinFrontProps>;
export default LanCoinFront;
