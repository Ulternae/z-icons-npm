import React from 'react';

export interface LanAddressCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAddressCard: React.FC<LanAddressCardProps>;
export default LanAddressCard;
