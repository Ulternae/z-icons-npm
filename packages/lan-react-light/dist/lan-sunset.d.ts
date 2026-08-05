import React from 'react';

export interface LanSunsetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunset(props: LanSunsetProps): React.ReactElement;
export default LanSunset;
