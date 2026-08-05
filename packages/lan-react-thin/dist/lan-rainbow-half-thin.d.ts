import React from 'react';

export interface LanRainbowHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRainbowHalfThin(props: LanRainbowHalfThinProps): React.ReactElement;
export default LanRainbowHalfThin;
