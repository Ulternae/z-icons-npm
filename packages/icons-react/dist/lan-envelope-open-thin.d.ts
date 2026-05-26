import React from 'react';

export interface LanEnvelopeOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeOpenThin: React.FC<LanEnvelopeOpenThinProps>;
export default LanEnvelopeOpenThin;
