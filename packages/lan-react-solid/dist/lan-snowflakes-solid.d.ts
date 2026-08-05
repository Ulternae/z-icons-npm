import React from 'react';

export interface LanSnowflakesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakesSolid(props: LanSnowflakesSolidProps): React.ReactElement;
export default LanSnowflakesSolid;
