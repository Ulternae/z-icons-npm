import React from 'react';

export interface LanPartyHornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPartyHornSolid(props: LanPartyHornSolidProps): React.ReactElement;
export default LanPartyHornSolid;
