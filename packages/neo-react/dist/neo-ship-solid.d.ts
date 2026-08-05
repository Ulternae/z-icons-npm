import React from 'react';

export interface NeoShipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShipSolid(props: NeoShipSolidProps): React.ReactElement;
export default NeoShipSolid;
