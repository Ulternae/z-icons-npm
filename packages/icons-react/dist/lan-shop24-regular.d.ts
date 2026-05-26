import React from 'react';

export interface LanShop24RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShop24Regular: React.FC<LanShop24RegularProps>;
export default LanShop24Regular;
