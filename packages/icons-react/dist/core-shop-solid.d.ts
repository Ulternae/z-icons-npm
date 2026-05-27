import React from 'react';

export interface CoreShopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShopSolid: React.FC<CoreShopSolidProps>;
export default CoreShopSolid;
