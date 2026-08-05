import React from 'react';

export interface LanGunSquirtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGunSquirtThin(props: LanGunSquirtThinProps): React.ReactElement;
export default LanGunSquirtThin;
