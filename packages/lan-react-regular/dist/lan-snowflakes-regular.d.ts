import React from 'react';

export interface LanSnowflakesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakesRegular(props: LanSnowflakesRegularProps): React.ReactElement;
export default LanSnowflakesRegular;
