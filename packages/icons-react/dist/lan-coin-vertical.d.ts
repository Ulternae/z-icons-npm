import React from 'react';

export interface LanCoinVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoinVertical: React.FC<LanCoinVerticalProps>;
export default LanCoinVertical;
