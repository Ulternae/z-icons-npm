import React from 'react';

export interface LanAddressCardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAddressCardRegular(props: LanAddressCardRegularProps): React.ReactElement;
export default LanAddressCardRegular;
