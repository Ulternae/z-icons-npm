import React from 'react';

export interface LanHouseNightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseNightRegular(props: LanHouseNightRegularProps): React.ReactElement;
export default LanHouseNightRegular;
