import React from 'react';

export interface MinaRainbowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRainbowSolid(props: MinaRainbowSolidProps): React.ReactElement;
export default MinaRainbowSolid;
