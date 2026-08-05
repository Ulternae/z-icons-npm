import React from 'react';

export interface NeoSnowflakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSnowflake(props: NeoSnowflakeProps): React.ReactElement;
export default NeoSnowflake;
