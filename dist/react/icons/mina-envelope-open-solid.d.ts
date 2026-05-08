import React from 'react';

export interface MinaEnvelopeOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEnvelopeOpenSolid: React.FC<MinaEnvelopeOpenSolidProps>;
export default MinaEnvelopeOpenSolid;
