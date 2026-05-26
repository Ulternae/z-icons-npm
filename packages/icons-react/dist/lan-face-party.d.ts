import React from 'react';

export interface LanFacePartyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceParty: React.FC<LanFacePartyProps>;
export default LanFaceParty;
