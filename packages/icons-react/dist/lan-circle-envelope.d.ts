import React from 'react';

export interface LanCircleEnvelopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEnvelope: React.FC<LanCircleEnvelopeProps>;
export default LanCircleEnvelope;
