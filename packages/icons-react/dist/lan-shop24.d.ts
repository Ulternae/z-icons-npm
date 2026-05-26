import React from 'react';

export interface LanShop24Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShop24: React.FC<LanShop24Props>;
export default LanShop24;
