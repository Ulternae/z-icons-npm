import React from 'react';

export interface NeoShopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShopSolid: React.FC<NeoShopSolidProps>;
export default NeoShopSolid;
