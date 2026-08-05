import React from 'react';

export interface LanHouseDayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseDay(props: LanHouseDayProps): React.ReactElement;
export default LanHouseDay;
