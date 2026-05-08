import React from 'react';

export interface MinaEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEnvelope: React.FC<MinaEnvelopeProps>;
export default MinaEnvelope;
