import React from 'react';

export interface CoreSnowflakeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSnowflakeRegularDuo(props: CoreSnowflakeRegularDuoProps): React.ReactElement;
export default CoreSnowflakeRegularDuo;
