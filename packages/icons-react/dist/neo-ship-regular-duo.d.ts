import React from 'react';

export interface NeoShipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShipRegularDuo: React.FC<NeoShipRegularDuoProps>;
export default NeoShipRegularDuo;
