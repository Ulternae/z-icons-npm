import React from 'react';

export interface NeoSnowflakeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSnowflakeRegularDuo: React.FC<NeoSnowflakeRegularDuoProps>;
export default NeoSnowflakeRegularDuo;
