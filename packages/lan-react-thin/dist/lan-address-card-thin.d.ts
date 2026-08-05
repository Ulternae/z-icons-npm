import React from 'react';

export interface LanAddressCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAddressCardThin(props: LanAddressCardThinProps): React.ReactElement;
export default LanAddressCardThin;
