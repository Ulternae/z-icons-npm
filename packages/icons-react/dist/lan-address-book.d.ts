import React from 'react';

export interface LanAddressBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAddressBook: React.FC<LanAddressBookProps>;
export default LanAddressBook;
