import React from 'react';

export interface LanRainbowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRainbow(props: LanRainbowProps): React.ReactElement;
export default LanRainbow;
