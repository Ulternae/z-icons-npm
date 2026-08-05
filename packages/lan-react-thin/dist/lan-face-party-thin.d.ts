import React from 'react';

export interface LanFacePartyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePartyThin(props: LanFacePartyThinProps): React.ReactElement;
export default LanFacePartyThin;
