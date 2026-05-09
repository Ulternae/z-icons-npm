import React from 'react';

export interface MinaEnvelopeOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEnvelopeOpen: React.FC<MinaEnvelopeOpenProps>;
export default MinaEnvelopeOpen;
