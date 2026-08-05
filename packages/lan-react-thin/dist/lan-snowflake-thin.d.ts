import React from 'react';

export interface LanSnowflakeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowflakeThin(props: LanSnowflakeThinProps): React.ReactElement;
export default LanSnowflakeThin;
