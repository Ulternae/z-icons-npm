import React from 'react';

export interface NeoEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEnvelope: React.FC<NeoEnvelopeProps>;
export default NeoEnvelope;
