import React from 'react';

export interface LanPartyBellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPartyBellRegular(props: LanPartyBellRegularProps): React.ReactElement;
export default LanPartyBellRegular;
