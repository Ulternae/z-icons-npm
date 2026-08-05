import React from 'react';

export interface LanAddressBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAddressBook(props: LanAddressBookProps): React.ReactElement;
export default LanAddressBook;
