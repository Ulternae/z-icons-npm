import React from 'react';

export interface LanMoonOverSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonOverSunThin(props: LanMoonOverSunThinProps): React.ReactElement;
export default LanMoonOverSunThin;
