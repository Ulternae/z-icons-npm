import React from 'react';

export interface LanPartyBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPartyBell(props: LanPartyBellProps): React.ReactElement;
export default LanPartyBell;
