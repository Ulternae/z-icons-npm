import React from 'react';

export interface LanEnvelopeCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeCircleCheck: React.FC<LanEnvelopeCircleCheckProps>;
export default LanEnvelopeCircleCheck;
