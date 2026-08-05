import React from 'react';

export interface LanSunsetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunsetThin(props: LanSunsetThinProps): React.ReactElement;
export default LanSunsetThin;
