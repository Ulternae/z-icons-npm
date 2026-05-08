import React from 'react';

export interface MinaTelephoneCallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTelephoneCall: React.FC<MinaTelephoneCallProps>;
export default MinaTelephoneCall;
