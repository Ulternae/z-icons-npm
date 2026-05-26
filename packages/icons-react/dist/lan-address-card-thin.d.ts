import React from 'react';

export interface LanAddressCardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAddressCardThin: React.FC<LanAddressCardThinProps>;
export default LanAddressCardThin;
