import React from 'react';

export interface LanUserMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMinusRegular(props: LanUserMinusRegularProps): React.ReactElement;
export default LanUserMinusRegular;
