import React from 'react';

export interface LanSnowflakeDropletsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakeDropletsSolid(props: LanSnowflakeDropletsSolidProps): React.ReactElement;
export default LanSnowflakeDropletsSolid;
