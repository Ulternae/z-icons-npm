import React from 'react';

export interface CoreSnowflakeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSnowflakeRegularDuo: React.FC<CoreSnowflakeRegularDuoProps>;
export default CoreSnowflakeRegularDuo;
