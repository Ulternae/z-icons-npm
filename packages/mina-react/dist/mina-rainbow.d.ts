import React from 'react';

export interface MinaRainbowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRainbow(props: MinaRainbowProps): React.ReactElement;
export default MinaRainbow;
