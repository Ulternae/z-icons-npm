import React from 'react';

export interface LanEnvelopesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopesSolid: React.FC<LanEnvelopesSolidProps>;
export default LanEnvelopesSolid;
