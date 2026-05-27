import React from 'react';

export interface CoreShipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShipSolid: React.FC<CoreShipSolidProps>;
export default CoreShipSolid;
