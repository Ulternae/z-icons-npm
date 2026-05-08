import React from 'react';

export interface MinaDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDropletSolid: React.FC<MinaDropletSolidProps>;
export default MinaDropletSolid;
