import React from 'react';

export interface LanAirplaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirplaySolid(props: LanAirplaySolidProps): React.ReactElement;
export default LanAirplaySolid;
