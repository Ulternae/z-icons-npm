import React from 'react';

export interface LanSunriseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunrise(props: LanSunriseProps): React.ReactElement;
export default LanSunrise;
