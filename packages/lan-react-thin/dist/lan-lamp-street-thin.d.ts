import React from 'react';

export interface LanLampStreetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampStreetThin(props: LanLampStreetThinProps): React.ReactElement;
export default LanLampStreetThin;
