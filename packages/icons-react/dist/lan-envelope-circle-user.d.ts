import React from 'react';

export interface LanEnvelopeCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeCircleUser: React.FC<LanEnvelopeCircleUserProps>;
export default LanEnvelopeCircleUser;
