import React from 'react';

export interface LanLampStreetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampStreet(props: LanLampStreetProps): React.ReactElement;
export default LanLampStreet;
