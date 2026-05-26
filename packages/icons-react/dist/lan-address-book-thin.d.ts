import React from 'react';

export interface LanAddressBookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAddressBookThin: React.FC<LanAddressBookThinProps>;
export default LanAddressBookThin;
