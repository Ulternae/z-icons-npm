import React from 'react';

export interface LanSnowflakesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakes(props: LanSnowflakesProps): React.ReactElement;
export default LanSnowflakes;
