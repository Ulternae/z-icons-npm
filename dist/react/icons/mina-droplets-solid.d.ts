import React from 'react';

export interface MinaDropletsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDropletsSolid: React.FC<MinaDropletsSolidProps>;
export default MinaDropletsSolid;
