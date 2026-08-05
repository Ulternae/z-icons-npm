import React from 'react';

export interface CoreShipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShipSolid(props: CoreShipSolidProps): React.ReactElement;
export default CoreShipSolid;
