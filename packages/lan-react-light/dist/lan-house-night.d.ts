import React from 'react';

export interface LanHouseNightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseNight(props: LanHouseNightProps): React.ReactElement;
export default LanHouseNight;
