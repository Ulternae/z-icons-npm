import React from 'react';

export interface CoreShipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShip: React.FC<CoreShipProps>;
export default CoreShip;
