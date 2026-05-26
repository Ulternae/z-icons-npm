import React from 'react';

export interface LanSnowflakesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakesThin: React.FC<LanSnowflakesThinProps>;
export default LanSnowflakesThin;
