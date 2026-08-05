import React from 'react';

export interface LanMoonOverSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonOverSun(props: LanMoonOverSunProps): React.ReactElement;
export default LanMoonOverSun;
