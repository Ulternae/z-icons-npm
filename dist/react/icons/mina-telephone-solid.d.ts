import React from 'react';

export interface MinaTelephoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTelephoneSolid: React.FC<MinaTelephoneSolidProps>;
export default MinaTelephoneSolid;
