import React from 'react';

export interface NeoShopRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShopRegularDuo(props: NeoShopRegularDuoProps): React.ReactElement;
export default NeoShopRegularDuo;
