import React from 'react';

export interface LanEnvelopeOpenTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeOpenText: React.FC<LanEnvelopeOpenTextProps>;
export default LanEnvelopeOpenText;
