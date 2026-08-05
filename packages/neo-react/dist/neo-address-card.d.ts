import React from 'react';

export interface NeoAddressCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAddressCard(props: NeoAddressCardProps): React.ReactElement;
export default NeoAddressCard;
