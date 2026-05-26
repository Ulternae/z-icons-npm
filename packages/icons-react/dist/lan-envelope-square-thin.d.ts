import React from 'react';

export interface LanEnvelopeSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeSquareThin: React.FC<LanEnvelopeSquareThinProps>;
export default LanEnvelopeSquareThin;
