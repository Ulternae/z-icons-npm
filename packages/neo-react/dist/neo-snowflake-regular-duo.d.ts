import React from 'react';

export interface NeoSnowflakeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSnowflakeRegularDuo(props: NeoSnowflakeRegularDuoProps): React.ReactElement;
export default NeoSnowflakeRegularDuo;
