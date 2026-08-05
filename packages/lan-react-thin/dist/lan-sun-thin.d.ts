import React from 'react';

export interface LanSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunThin(props: LanSunThinProps): React.ReactElement;
export default LanSunThin;
