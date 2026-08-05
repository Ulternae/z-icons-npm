import React from 'react';

export interface MinaThermometerSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThermometerSnowflake(props: MinaThermometerSnowflakeProps): React.ReactElement;
export default MinaThermometerSnowflake;
