import React from 'react';

export interface LanPartyHornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPartyHornRegular(props: LanPartyHornRegularProps): React.ReactElement;
export default LanPartyHornRegular;
