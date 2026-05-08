import React from 'react';

export interface MinaThermometerSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThermometerSnowflake: React.FC<MinaThermometerSnowflakeProps>;
export default MinaThermometerSnowflake;
