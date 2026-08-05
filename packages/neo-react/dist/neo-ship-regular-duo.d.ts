import React from 'react';

export interface NeoShipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShipRegularDuo(props: NeoShipRegularDuoProps): React.ReactElement;
export default NeoShipRegularDuo;
