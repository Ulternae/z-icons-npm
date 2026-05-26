import React from 'react';

export interface LanEnvelopeCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeCircleCheckThin: React.FC<LanEnvelopeCircleCheckThinProps>;
export default LanEnvelopeCircleCheckThin;
