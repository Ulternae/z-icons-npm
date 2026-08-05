import React from 'react';

export interface LanSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSun(props: LanSunProps): React.ReactElement;
export default LanSun;
