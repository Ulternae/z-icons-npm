import React from 'react';

export interface NeoShipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShip: React.FC<NeoShipProps>;
export default NeoShip;
