import React from 'react';

export interface LanAddressBookRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAddressBookRegular(props: LanAddressBookRegularProps): React.ReactElement;
export default LanAddressBookRegular;
