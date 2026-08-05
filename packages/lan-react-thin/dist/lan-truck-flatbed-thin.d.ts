import React from 'react';

export interface LanTruckFlatbedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFlatbedThin(props: LanTruckFlatbedThinProps): React.ReactElement;
export default LanTruckFlatbedThin;
