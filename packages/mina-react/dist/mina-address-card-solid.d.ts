import React from 'react';

export interface MinaAddressCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAddressCardSolid(props: MinaAddressCardSolidProps): React.ReactElement;
export default MinaAddressCardSolid;
