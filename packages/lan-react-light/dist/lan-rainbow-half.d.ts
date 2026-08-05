import React from 'react';

export interface LanRainbowHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRainbowHalf(props: LanRainbowHalfProps): React.ReactElement;
export default LanRainbowHalf;
