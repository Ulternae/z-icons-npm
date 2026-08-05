import React from 'react';

export interface LanSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflake(props: LanSnowflakeProps): React.ReactElement;
export default LanSnowflake;
