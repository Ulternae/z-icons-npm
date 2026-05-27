import React from 'react';

export interface NeoSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSnowflake: React.FC<NeoSnowflakeProps>;
export default NeoSnowflake;
