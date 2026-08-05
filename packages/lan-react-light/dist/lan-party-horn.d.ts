import React from 'react';

export interface LanPartyHornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPartyHorn(props: LanPartyHornProps): React.ReactElement;
export default LanPartyHorn;
