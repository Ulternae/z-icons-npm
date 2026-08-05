import React from 'react';

export interface LanHouseNightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseNightThin(props: LanHouseNightThinProps): React.ReactElement;
export default LanHouseNightThin;
