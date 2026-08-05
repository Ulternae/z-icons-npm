import React from 'react';

export interface LanTruckFlatbedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckFlatbed(props: LanTruckFlatbedProps): React.ReactElement;
export default LanTruckFlatbed;
