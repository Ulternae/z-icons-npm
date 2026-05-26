import React from 'react';

export interface LanEnvelopesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopesThin: React.FC<LanEnvelopesThinProps>;
export default LanEnvelopesThin;
