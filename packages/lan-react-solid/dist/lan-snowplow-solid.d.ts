import React from 'react';

export interface LanSnowplowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowplowSolid(props: LanSnowplowSolidProps): React.ReactElement;
export default LanSnowplowSolid;
