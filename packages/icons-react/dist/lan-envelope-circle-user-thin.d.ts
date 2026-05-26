import React from 'react';

export interface LanEnvelopeCircleUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeCircleUserThin: React.FC<LanEnvelopeCircleUserThinProps>;
export default LanEnvelopeCircleUserThin;
