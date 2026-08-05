import React from 'react';

export interface LanRainbowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRainbowSolid(props: LanRainbowSolidProps): React.ReactElement;
export default LanRainbowSolid;
