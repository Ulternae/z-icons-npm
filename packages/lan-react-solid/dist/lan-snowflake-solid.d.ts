import React from 'react';

export interface LanSnowflakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakeSolid(props: LanSnowflakeSolidProps): React.ReactElement;
export default LanSnowflakeSolid;
