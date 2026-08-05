import React from 'react';

export interface LanFacePartyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceParty(props: LanFacePartyProps): React.ReactElement;
export default LanFaceParty;
