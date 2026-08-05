import React from 'react';

export interface LanBoxCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxCircleCheck(props: LanBoxCircleCheckProps): React.ReactElement;
export default LanBoxCircleCheck;
