import React from 'react';

export interface LanHouseDayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseDayThin(props: LanHouseDayThinProps): React.ReactElement;
export default LanHouseDayThin;
