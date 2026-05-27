import React from 'react';

export interface NeoShipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShipSolid: React.FC<NeoShipSolidProps>;
export default NeoShipSolid;
