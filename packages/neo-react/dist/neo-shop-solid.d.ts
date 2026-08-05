import React from 'react';

export interface NeoShopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShopSolid(props: NeoShopSolidProps): React.ReactElement;
export default NeoShopSolid;
