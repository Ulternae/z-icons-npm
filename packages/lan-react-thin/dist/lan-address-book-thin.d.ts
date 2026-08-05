import React from 'react';

export interface LanAddressBookThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAddressBookThin(props: LanAddressBookThinProps): React.ReactElement;
export default LanAddressBookThin;
