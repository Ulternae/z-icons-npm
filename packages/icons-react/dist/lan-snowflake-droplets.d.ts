import React from 'react';

export interface LanSnowflakeDropletsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakeDroplets: React.FC<LanSnowflakeDropletsProps>;
export default LanSnowflakeDroplets;
