import React from 'react';

export interface CoreEnvelopeOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEnvelopeOpenSolid: React.FC<CoreEnvelopeOpenSolidProps>;
export default CoreEnvelopeOpenSolid;
