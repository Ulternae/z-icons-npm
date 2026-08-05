import React from 'react';

export interface LanPhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhone(props: LanPhoneProps): React.ReactElement;
export default LanPhone;
