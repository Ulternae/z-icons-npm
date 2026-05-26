import React from 'react';

export interface LanShipLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShipLargeSolid: React.FC<LanShipLargeSolidProps>;
export default LanShipLargeSolid;
