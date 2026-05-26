import React from 'react';

export interface LanShipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShip: React.FC<LanShipProps>;
export default LanShip;
