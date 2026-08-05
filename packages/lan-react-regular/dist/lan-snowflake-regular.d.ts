import React from 'react';

export interface LanSnowflakeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakeRegular(props: LanSnowflakeRegularProps): React.ReactElement;
export default LanSnowflakeRegular;
