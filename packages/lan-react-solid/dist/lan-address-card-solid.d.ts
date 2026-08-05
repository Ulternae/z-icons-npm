import React from 'react';

export interface LanAddressCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAddressCardSolid(props: LanAddressCardSolidProps): React.ReactElement;
export default LanAddressCardSolid;
