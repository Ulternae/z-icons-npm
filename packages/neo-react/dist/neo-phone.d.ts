import React from 'react';

export interface NeoPhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPhone(props: NeoPhoneProps): React.ReactElement;
export default NeoPhone;
