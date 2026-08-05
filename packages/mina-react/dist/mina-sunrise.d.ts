import React from 'react';

export interface MinaSunriseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSunrise(props: MinaSunriseProps): React.ReactElement;
export default MinaSunrise;
