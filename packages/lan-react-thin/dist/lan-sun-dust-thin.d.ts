import React from 'react';

export interface LanSunDustThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunDustThin(props: LanSunDustThinProps): React.ReactElement;
export default LanSunDustThin;
