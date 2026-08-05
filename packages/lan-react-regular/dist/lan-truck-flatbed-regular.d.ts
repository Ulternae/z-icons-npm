import React from 'react';

export interface LanTruckFlatbedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFlatbedRegular(props: LanTruckFlatbedRegularProps): React.ReactElement;
export default LanTruckFlatbedRegular;
