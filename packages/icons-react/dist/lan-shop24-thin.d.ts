import React from 'react';

export interface LanShop24ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShop24Thin: React.FC<LanShop24ThinProps>;
export default LanShop24Thin;
