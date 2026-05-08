import React from 'react';

export interface MinaSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSnowflake: React.FC<MinaSnowflakeProps>;
export default MinaSnowflake;
