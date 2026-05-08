import React from 'react';

export interface NeoAddressCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAddressCard: React.FC<NeoAddressCardProps>;
export default NeoAddressCard;
