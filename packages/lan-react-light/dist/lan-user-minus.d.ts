import React from 'react';

export interface LanUserMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMinus(props: LanUserMinusProps): React.ReactElement;
export default LanUserMinus;
