import React from 'react';

export interface LanGunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunThin(props: LanGunThinProps): React.ReactElement;
export default LanGunThin;
