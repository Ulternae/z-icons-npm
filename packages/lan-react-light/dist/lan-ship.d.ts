import React from 'react';

export interface LanShipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShip(props: LanShipProps): React.ReactElement;
export default LanShip;
