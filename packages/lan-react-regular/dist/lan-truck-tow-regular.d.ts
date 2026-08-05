import React from 'react';

export interface LanTruckTowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckTowRegular(props: LanTruckTowRegularProps): React.ReactElement;
export default LanTruckTowRegular;
