import React from 'react';

export interface LanDroneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDroneRegular(props: LanDroneRegularProps): React.ReactElement;
export default LanDroneRegular;
