import React from 'react';

export interface LanHouseWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseWindowThin(props: LanHouseWindowThinProps): React.ReactElement;
export default LanHouseWindowThin;
