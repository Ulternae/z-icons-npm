import React from 'react';

export interface LanFileMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMinusRegular(props: LanFileMinusRegularProps): React.ReactElement;
export default LanFileMinusRegular;
