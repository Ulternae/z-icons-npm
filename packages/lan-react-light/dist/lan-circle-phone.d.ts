import React from 'react';

export interface LanCirclePhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePhone(props: LanCirclePhoneProps): React.ReactElement;
export default LanCirclePhone;
