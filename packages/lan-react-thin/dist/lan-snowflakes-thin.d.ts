import React from 'react';

export interface LanSnowflakesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakesThin(props: LanSnowflakesThinProps): React.ReactElement;
export default LanSnowflakesThin;
