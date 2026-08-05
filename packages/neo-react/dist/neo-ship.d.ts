import React from 'react';

export interface NeoShipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShip(props: NeoShipProps): React.ReactElement;
export default NeoShip;
