import React from 'react';

export interface LanSnowflakeDropletsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakeDropletsThin: React.FC<LanSnowflakeDropletsThinProps>;
export default LanSnowflakeDropletsThin;
