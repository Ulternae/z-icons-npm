import React from 'react';

export interface LanSnowflakeDropletsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakeDropletsThin(props: LanSnowflakeDropletsThinProps): React.ReactElement;
export default LanSnowflakeDropletsThin;
