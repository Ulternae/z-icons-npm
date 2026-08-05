import React from 'react';

export interface LanMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusRegular(props: LanMinusRegularProps): React.ReactElement;
export default LanMinusRegular;
