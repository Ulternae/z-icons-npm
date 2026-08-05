import React from 'react';

export interface LanSnowBlowingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowBlowing(props: LanSnowBlowingProps): React.ReactElement;
export default LanSnowBlowing;
