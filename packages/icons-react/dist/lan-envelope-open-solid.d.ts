import React from 'react';

export interface LanEnvelopeOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeOpenSolid: React.FC<LanEnvelopeOpenSolidProps>;
export default LanEnvelopeOpenSolid;
