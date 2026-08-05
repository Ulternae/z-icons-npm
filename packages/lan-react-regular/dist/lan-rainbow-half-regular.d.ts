import React from 'react';

export interface LanRainbowHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRainbowHalfRegular(props: LanRainbowHalfRegularProps): React.ReactElement;
export default LanRainbowHalfRegular;
