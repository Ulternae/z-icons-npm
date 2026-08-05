import React from 'react';

export interface LanAddressBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAddressBookSolid(props: LanAddressBookSolidProps): React.ReactElement;
export default LanAddressBookSolid;
