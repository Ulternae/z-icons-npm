import React from 'react';

export interface LanPartyBellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPartyBellSolid(props: LanPartyBellSolidProps): React.ReactElement;
export default LanPartyBellSolid;
