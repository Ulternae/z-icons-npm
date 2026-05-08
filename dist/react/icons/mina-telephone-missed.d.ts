import React from 'react';

export interface MinaTelephoneMissedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTelephoneMissed: React.FC<MinaTelephoneMissedProps>;
export default MinaTelephoneMissed;
