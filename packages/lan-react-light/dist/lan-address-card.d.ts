import React from 'react';

export interface LanAddressCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAddressCard(props: LanAddressCardProps): React.ReactElement;
export default LanAddressCard;
