import React from 'react';

export interface LanAddressBookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAddressBookRegular: React.FC<LanAddressBookRegularProps>;
export default LanAddressBookRegular;
