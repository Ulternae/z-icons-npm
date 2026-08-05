import React from 'react';

export interface LanPartyHornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPartyHornThin(props: LanPartyHornThinProps): React.ReactElement;
export default LanPartyHornThin;
