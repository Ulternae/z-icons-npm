import React from 'react';

export interface LanSnowflakesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakesSolid: React.FC<LanSnowflakesSolidProps>;
export default LanSnowflakesSolid;
