import React from 'react';

export interface MinaEarthProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEarth(props: MinaEarthProps): React.ReactElement;
export default MinaEarth;
