import React from 'react';

export interface LanSnowflakeDropletsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakeDropletsSolid: React.FC<LanSnowflakeDropletsSolidProps>;
export default LanSnowflakeDropletsSolid;
