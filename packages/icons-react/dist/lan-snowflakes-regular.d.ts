import React from 'react';

export interface LanSnowflakesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowflakesRegular: React.FC<LanSnowflakesRegularProps>;
export default LanSnowflakesRegular;
