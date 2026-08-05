import React from 'react';

export interface LanRaindropsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaindropsSolid(props: LanRaindropsSolidProps): React.ReactElement;
export default LanRaindropsSolid;
