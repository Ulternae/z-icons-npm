import React from 'react';

export interface LanGunSquirtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunSquirtRegular(props: LanGunSquirtRegularProps): React.ReactElement;
export default LanGunSquirtRegular;
