import React from 'react';

export interface MinaAddressCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAddressCard: React.FC<MinaAddressCardProps>;
export default MinaAddressCard;
