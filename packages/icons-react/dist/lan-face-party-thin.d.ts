import React from 'react';

export interface LanFacePartyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePartyThin: React.FC<LanFacePartyThinProps>;
export default LanFacePartyThin;
