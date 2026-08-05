import React from 'react';

export interface LanRainbowHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRainbowHalfSolid(props: LanRainbowHalfSolidProps): React.ReactElement;
export default LanRainbowHalfSolid;
