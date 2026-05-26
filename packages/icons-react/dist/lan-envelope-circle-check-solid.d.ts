import React from 'react';

export interface LanEnvelopeCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeCircleCheckSolid: React.FC<LanEnvelopeCircleCheckSolidProps>;
export default LanEnvelopeCircleCheckSolid;
