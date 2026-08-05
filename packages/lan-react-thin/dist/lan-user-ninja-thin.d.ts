import React from 'react';

export interface LanUserNinjaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserNinjaThin(props: LanUserNinjaThinProps): React.ReactElement;
export default LanUserNinjaThin;
