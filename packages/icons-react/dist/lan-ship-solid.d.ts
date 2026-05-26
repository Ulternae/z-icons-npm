import React from 'react';

export interface LanShipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShipSolid: React.FC<LanShipSolidProps>;
export default LanShipSolid;
