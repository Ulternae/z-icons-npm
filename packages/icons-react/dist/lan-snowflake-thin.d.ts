import React from 'react';

export interface LanSnowflakeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakeThin: React.FC<LanSnowflakeThinProps>;
export default LanSnowflakeThin;
