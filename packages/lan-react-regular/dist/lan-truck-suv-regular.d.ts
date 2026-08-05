import React from 'react';

export interface LanTruckSuvRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckSuvRegular(props: LanTruckSuvRegularProps): React.ReactElement;
export default LanTruckSuvRegular;
