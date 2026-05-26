import React from 'react';

export interface LanSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflake: React.FC<LanSnowflakeProps>;
export default LanSnowflake;
