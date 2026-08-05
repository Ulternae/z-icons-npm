import React from 'react';

export interface MinaSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSnowflake(props: MinaSnowflakeProps): React.ReactElement;
export default MinaSnowflake;
