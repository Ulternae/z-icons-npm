import React from 'react';

export interface LanRaindropsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaindrops(props: LanRaindropsProps): React.ReactElement;
export default LanRaindrops;
