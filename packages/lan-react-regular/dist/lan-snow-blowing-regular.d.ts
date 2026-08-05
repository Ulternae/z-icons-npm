import React from 'react';

export interface LanSnowBlowingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowBlowingRegular(props: LanSnowBlowingRegularProps): React.ReactElement;
export default LanSnowBlowingRegular;
