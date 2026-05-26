import React from 'react';

export interface LanSnowflakeDropletsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakeDropletsRegular: React.FC<LanSnowflakeDropletsRegularProps>;
export default LanSnowflakeDropletsRegular;
