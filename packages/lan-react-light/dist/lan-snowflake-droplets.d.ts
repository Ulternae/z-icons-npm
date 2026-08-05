import React from 'react';

export interface LanSnowflakeDropletsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakeDroplets(props: LanSnowflakeDropletsProps): React.ReactElement;
export default LanSnowflakeDroplets;
