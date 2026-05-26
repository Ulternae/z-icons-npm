import React from 'react';

export interface LanSnowflakeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakeRegular: React.FC<LanSnowflakeRegularProps>;
export default LanSnowflakeRegular;
