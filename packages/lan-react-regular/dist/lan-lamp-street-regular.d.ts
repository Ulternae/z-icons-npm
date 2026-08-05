import React from 'react';

export interface LanLampStreetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampStreetRegular(props: LanLampStreetRegularProps): React.ReactElement;
export default LanLampStreetRegular;
