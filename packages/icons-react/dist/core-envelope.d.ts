import React from 'react';

export interface CoreEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEnvelope: React.FC<CoreEnvelopeProps>;
export default CoreEnvelope;
