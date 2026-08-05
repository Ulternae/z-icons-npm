import React from 'react';

export interface MinaAddressCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAddressCard(props: MinaAddressCardProps): React.ReactElement;
export default MinaAddressCard;
