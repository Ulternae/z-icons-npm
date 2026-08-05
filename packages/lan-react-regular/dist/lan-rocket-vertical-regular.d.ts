import React from 'react';

export interface LanRocketVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketVerticalRegular(props: LanRocketVerticalRegularProps): React.ReactElement;
export default LanRocketVerticalRegular;
