import React from 'react';

export interface LanGunSquirtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunSquirt(props: LanGunSquirtProps): React.ReactElement;
export default LanGunSquirt;
