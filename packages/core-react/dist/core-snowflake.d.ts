import React from 'react';

export interface CoreSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSnowflake(props: CoreSnowflakeProps): React.ReactElement;
export default CoreSnowflake;
