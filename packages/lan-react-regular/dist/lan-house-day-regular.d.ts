import React from 'react';

export interface LanHouseDayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseDayRegular(props: LanHouseDayRegularProps): React.ReactElement;
export default LanHouseDayRegular;
