import React from 'react';

export interface MinaDropletOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDropletOffSolid: React.FC<MinaDropletOffSolidProps>;
export default MinaDropletOffSolid;
