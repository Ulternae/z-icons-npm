import React from 'react';

export interface MinaUnlinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUnlinkSolid: React.FC<MinaUnlinkSolidProps>;
export default MinaUnlinkSolid;
