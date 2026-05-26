import React from 'react';

export interface LanEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelope: React.FC<LanEnvelopeProps>;
export default LanEnvelope;
