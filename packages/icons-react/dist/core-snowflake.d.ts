import React from 'react';

export interface CoreSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSnowflake: React.FC<CoreSnowflakeProps>;
export default CoreSnowflake;
