import React from 'react';

export interface LanLampStreetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampStreetSolid(props: LanLampStreetSolidProps): React.ReactElement;
export default LanLampStreetSolid;
