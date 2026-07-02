import React from 'react';

export interface CoreShipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShip(props: CoreShipProps): React.ReactElement;
export default CoreShip;
