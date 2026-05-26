import React from 'react';

export interface LanAddressBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAddressBookSolid: React.FC<LanAddressBookSolidProps>;
export default LanAddressBookSolid;
