import React from 'react';

export interface CoreAddressCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAddressCard: React.FC<CoreAddressCardProps>;
export default CoreAddressCard;
