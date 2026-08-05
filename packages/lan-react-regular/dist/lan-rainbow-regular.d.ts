import React from 'react';

export interface LanRainbowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRainbowRegular(props: LanRainbowRegularProps): React.ReactElement;
export default LanRainbowRegular;
