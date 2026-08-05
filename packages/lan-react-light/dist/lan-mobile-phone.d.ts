import React from 'react';

export interface LanMobilePhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobilePhone(props: LanMobilePhoneProps): React.ReactElement;
export default LanMobilePhone;
