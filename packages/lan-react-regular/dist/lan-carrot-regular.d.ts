import React from 'react';

export interface LanCarrotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarrotRegular(props: LanCarrotRegularProps): React.ReactElement;
export default LanCarrotRegular;
