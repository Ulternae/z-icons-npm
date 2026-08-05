import React from 'react';

export interface LanGunRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunRegular(props: LanGunRegularProps): React.ReactElement;
export default LanGunRegular;
