import React from 'react';

export interface LanSnowflakeDropletsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakeDropletsRegular(props: LanSnowflakeDropletsRegularProps): React.ReactElement;
export default LanSnowflakeDropletsRegular;
