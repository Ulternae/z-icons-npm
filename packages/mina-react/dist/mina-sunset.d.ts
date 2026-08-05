import React from 'react';

export interface MinaSunsetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunset(props: MinaSunsetProps): React.ReactElement;
export default MinaSunset;
