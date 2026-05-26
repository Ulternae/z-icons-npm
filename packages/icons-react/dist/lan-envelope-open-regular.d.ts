import React from 'react';

export interface LanEnvelopeOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeOpenRegular: React.FC<LanEnvelopeOpenRegularProps>;
export default LanEnvelopeOpenRegular;
