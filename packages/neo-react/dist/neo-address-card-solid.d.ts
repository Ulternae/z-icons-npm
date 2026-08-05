import React from 'react';

export interface NeoAddressCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAddressCardSolid(props: NeoAddressCardSolidProps): React.ReactElement;
export default NeoAddressCardSolid;
