import React from 'react';

export interface MinaDropletOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDropletOff: React.FC<MinaDropletOffProps>;
export default MinaDropletOff;
