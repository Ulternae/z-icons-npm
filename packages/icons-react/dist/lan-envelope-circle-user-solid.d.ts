import React from 'react';

export interface LanEnvelopeCircleUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeCircleUserSolid: React.FC<LanEnvelopeCircleUserSolidProps>;
export default LanEnvelopeCircleUserSolid;
