import React from 'react';

export interface LanEnvelopeOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeOpen: React.FC<LanEnvelopeOpenProps>;
export default LanEnvelopeOpen;
